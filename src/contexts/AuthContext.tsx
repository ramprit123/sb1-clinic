import React, { createContext, useContext, useEffect, useState } from "react";
import { User, Session } from "@supabase/supabase-js";
import { supabase, UserProfile } from "../lib/supabase";

interface AuthContextType {
  user: User | null;
  profile: UserProfile | null;
  session: Session | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<{ error: any }>;
  signUp: (
    email: string,
    password: string,
    userData: Partial<UserProfile>
  ) => Promise<{ error: any }>;
  signOut: () => Promise<void>;
  resetPassword: (email: string) => Promise<{ error: any }>;
  updateProfile: (updates: Partial<UserProfile>) => Promise<{ error: any }>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initializeAuth = async () => {
      if (!supabase) {
        console.error(
          "Supabase client not initialized. Please check your environment variables."
        );
        setLoading(false);
        return;
      }

      // Get initial session
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setSession(session);
      setUser(session?.user ?? null);
      if (session?.user) {
        await fetchUserProfile(session.user.id);
      } else {
        setLoading(false);
      }

      // Listen for auth changes
      const {
        data: { subscription },
      } = supabase.auth.onAuthStateChange(async (event, session) => {
        console.log("Auth state changed:", event, session?.user?.email);
        setSession(session);
        setUser(session?.user ?? null);

        if (session?.user) {
          await fetchUserProfile(session.user.id);
        } else {
          setProfile(null);
          setLoading(false);
        }
      });

      return () => subscription.unsubscribe();
    };

    const cleanupPromise = initializeAuth();

    // Cleanup function for useEffect
    return () => {
      cleanupPromise.then((cleanup) => {
        if (typeof cleanup === "function") cleanup();
      });
    };
  }, []);

  const fetchUserProfile = async (userId: string) => {
    if (!supabase) return;

    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("user_profiles")
        .select("*")
        .eq("id", userId)
        .single();

      if (error) {
        console.error("Error fetching user profile:", error);
        // If profile doesn't exist, we'll still set loading to false
        // The user might need to complete their profile setup
      } else {
        setProfile(data);
      }
    } catch (error) {
      console.error("Error fetching user profile:", error);
    } finally {
      setLoading(false);
    }
  };

  const signIn = async (email: string, password: string) => {
    if (!supabase) {
      return { error: new Error("Supabase client not initialized") };
    }

    try {
      setLoading(true);
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        console.error("Sign in error:", error);
        return { error };
      }

      // The auth state change listener will handle setting user and profile
      return { error: null };
    } catch (error) {
      console.error("Sign in error:", error);
      return { error };
    } finally {
      setLoading(false);
    }
  };

  const signUp = async (
    email: string,
    password: string,
    userData: Partial<UserProfile>
  ) => {
    if (!supabase) {
      return { error: new Error("Supabase client not initialized") };
    }

    try {
      setLoading(true);
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            first_name: userData.first_name,
            last_name: userData.last_name,
            role: userData.role,
          },
        },
      });

      if (error) {
        console.error("Sign up error:", error);
        return { error };
      }

      if (data.user) {
        // Create user profile
        const profileData = {
          id: data.user.id,
          email,
          first_name: userData.first_name || "",
          last_name: userData.last_name || "",
          role: userData.role || "doctor",
          phone: userData.phone || "",
          specialization: userData.specialization || "",
          license_number: userData.license_number || "",
          experience_years: userData.experience_years || 0,
          bio: userData.bio || "",
          consultation_fee: 0,
          is_active: true,
        };

        const { error: profileError } = await supabase
          .from("user_profiles")
          .insert([profileData]);

        if (profileError) {
          console.error("Profile creation error:", profileError);
          return { error: profileError };
        }
      }

      return { error: null };
    } catch (error) {
      console.error("Sign up error:", error);
      return { error };
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    if (!supabase) return;

    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.error("Sign out error:", error);
      }
      // The auth state change listener will handle clearing user and profile
    } catch (error) {
      console.error("Sign out error:", error);
    }
  };

  const resetPassword = async (email: string) => {
    if (!supabase) {
      return { error: new Error("Supabase client not initialized") };
    }

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`,
      });
      return { error };
    } catch (error) {
      console.error("Reset password error:", error);
      return { error };
    }
  };

  const updateProfile = async (updates: Partial<UserProfile>) => {
    if (!user) return { error: new Error("No user logged in") };
    if (!supabase)
      return { error: new Error("Supabase client not initialized") };

    try {
      const { error } = await supabase
        .from("user_profiles")
        .update(updates)
        .eq("id", user.id);

      if (!error) {
        setProfile((prev) => (prev ? { ...prev, ...updates } : null));
      }

      return { error };
    } catch (error) {
      console.error("Update profile error:", error);
      return { error };
    }
  };

  const value = {
    user,
    profile,
    session,
    loading,
    signIn,
    signUp,
    signOut,
    resetPassword,
    updateProfile,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
