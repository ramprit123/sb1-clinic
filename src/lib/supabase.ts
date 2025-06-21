import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase environment variables. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in your .env file.')
}

export const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null

// Types
export interface UserProfile {
  id: string
  email: string
  first_name: string
  last_name: string
  role: 'admin' | 'doctor' | 'nurse' | 'receptionist'
  avatar_url?: string
  phone?: string
  specialization?: string
  license_number?: string
  experience_years?: number
  bio?: string
  consultation_fee?: number
  is_active: boolean
  created_at: string
  updated_at: string
}

export interface Clinic {
  id: string
  name: string
  address?: string
  phone?: string
  email?: string
  operating_hours?: any
  timezone?: string
  created_at: string
  updated_at: string
}

export interface Patient {
  id: string
  first_name: string
  last_name: string
  email?: string
  phone?: string
  date_of_birth?: string
  gender?: string
  blood_type?: string
  address?: string
  emergency_contact_name?: string
  emergency_contact_phone?: string
  insurance_provider?: string
  insurance_policy_number?: string
  allergies?: string[]
  medical_conditions?: string[]
  current_medications?: string[]
  is_active: boolean
  created_at: string
  updated_at: string
}

export interface Appointment {
  id: string
  patient_id: string
  doctor_id: string
  clinic_id: string
  appointment_date: string
  appointment_time: string
  duration_minutes: number
  appointment_type: 'in-person' | 'video' | 'phone'
  status: 'scheduled' | 'confirmed' | 'in-progress' | 'completed' | 'cancelled' | 'no-show'
  reason?: string
  notes?: string
  created_at: string
  updated_at: string
  patient?: Patient
  doctor?: UserProfile
}

export interface Service {
  id: string
  clinic_id: string
  name: string
  description?: string
  category: string
  duration_minutes: number
  price: number
  is_active: boolean
  created_at: string
  updated_at: string
}

export interface Invoice {
  id: string
  invoice_number: string
  patient_id: string
  doctor_id: string
  clinic_id: string
  appointment_id?: string
  issue_date: string
  due_date: string
  subtotal: number
  tax_amount: number
  total_amount: number
  status: 'draft' | 'pending' | 'paid' | 'overdue' | 'cancelled'
  payment_method?: string
  payment_date?: string
  notes?: string
  created_at: string
  updated_at: string
  patient?: Patient
  doctor?: UserProfile
  invoice_items?: InvoiceItem[]
}

export interface InvoiceItem {
  id: string
  invoice_id: string
  service_id?: string
  description: string
  quantity: number
  unit_price: number
  total_price: number
  created_at: string
  service?: Service
}