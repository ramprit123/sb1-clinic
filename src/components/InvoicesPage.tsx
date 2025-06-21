import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  Plus, 
  Download, 
  Eye, 
  MoreHorizontal,
  DollarSign,
  Calendar,
  Clock,
  CheckCircle,
  AlertCircle,
  XCircle,
  FileText,
  Send
} from 'lucide-react';

const invoices = [
  {
    id: "INV-001",
    patientName: "Emma Wilson",
    doctor: "Dr. Sarah Johnson",
    date: "2024-01-15",
    dueDate: "2024-02-15",
    amount: 350.00,
    status: "Paid",
    services: [
      { name: "Consultation", quantity: 1, rate: 150.00, amount: 150.00 },
      { name: "Blood Test", quantity: 1, rate: 75.00, amount: 75.00 },
      { name: "X-Ray", quantity: 1, rate: 125.00, amount: 125.00 }
    ],
    paymentMethod: "Credit Card",
    paidDate: "2024-01-16"
  },
  {
    id: "INV-002",
    patientName: "Michael Chen",
    doctor: "Dr. Robert Davis",
    date: "2024-01-12",
    dueDate: "2024-02-12",
    amount: 275.00,
    status: "Pending",
    services: [
      { name: "Cardiology Consultation", quantity: 1, rate: 200.00, amount: 200.00 },
      { name: "ECG", quantity: 1, rate: 75.00, amount: 75.00 }
    ],
    paymentMethod: null,
    paidDate: null
  },
  {
    id: "INV-003",
    patientName: "Sarah Davis",
    doctor: "Dr. Emily Brown",
    date: "2024-01-10",
    dueDate: "2024-02-10",
    amount: 180.00,
    status: "Overdue",
    services: [
      { name: "Prenatal Checkup", quantity: 1, rate: 120.00, amount: 120.00 },
      { name: "Ultrasound", quantity: 1, rate: 60.00, amount: 60.00 }
    ],
    paymentMethod: null,
    paidDate: null
  },
  {
    id: "INV-004",
    patientName: "James Thompson",
    doctor: "Dr. Sarah Johnson",
    date: "2024-01-08",
    dueDate: "2024-02-08",
    amount: 225.00,
    status: "Paid",
    services: [
      { name: "Follow-up Consultation", quantity: 1, rate: 150.00, amount: 150.00 },
      { name: "Prescription", quantity: 1, rate: 75.00, amount: 75.00 }
    ],
    paymentMethod: "Insurance",
    paidDate: "2024-01-10"
  }
];

export default function InvoicesPage() {
  const [selectedInvoice, setSelectedInvoice] = useState<any>(null);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Paid':
        return 'bg-emerald-100 text-emerald-800';
      case 'Pending':
        return 'bg-amber-100 text-amber-800';
      case 'Overdue':
        return 'bg-rose-100 text-rose-800';
      default:
        return 'bg-slate-100 text-slate-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Paid':
        return <CheckCircle className="h-4 w-4" />;
      case 'Pending':
        return <Clock className="h-4 w-4" />;
      case 'Overdue':
        return <AlertCircle className="h-4 w-4" />;
      default:
        return <XCircle className="h-4 w-4" />;
    }
  };

  const totalRevenue = invoices.reduce((sum, inv) => sum + inv.amount, 0);
  const paidAmount = invoices.filter(inv => inv.status === 'Paid').reduce((sum, inv) => sum + inv.amount, 0);
  const pendingAmount = invoices.filter(inv => inv.status === 'Pending').reduce((sum, inv) => sum + inv.amount, 0);
  const overdueAmount = invoices.filter(inv => inv.status === 'Overdue').reduce((sum, inv) => sum + inv.amount, 0);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Invoices</h1>
          <p className="text-slate-600 mt-1">Manage billing and payment tracking</p>
        </div>
        <button className="bg-sky-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-sky-700 transition-all duration-200 flex items-center space-x-2 shadow-lg">
          <Plus className="h-4 w-4" />
          <span>Create Invoice</span>
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-600">Total Revenue</p>
              <p className="text-2xl font-bold text-slate-900 mt-2">${totalRevenue.toFixed(2)}</p>
            </div>
            <div className="p-3 bg-sky-100 rounded-xl">
              <DollarSign className="h-6 w-6 text-sky-600" />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-600">Paid</p>
              <p className="text-2xl font-bold text-slate-900 mt-2">${paidAmount.toFixed(2)}</p>
            </div>
            <div className="p-3 bg-emerald-100 rounded-xl">
              <CheckCircle className="h-6 w-6 text-emerald-600" />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-600">Pending</p>
              <p className="text-2xl font-bold text-slate-900 mt-2">${pendingAmount.toFixed(2)}</p>
            </div>
            <div className="p-3 bg-amber-100 rounded-xl">
              <Clock className="h-6 w-6 text-amber-600" />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-600">Overdue</p>
              <p className="text-2xl font-bold text-slate-900 mt-2">${overdueAmount.toFixed(2)}</p>
            </div>
            <div className="p-3 bg-rose-100 rounded-xl">
              <AlertCircle className="h-6 w-6 text-rose-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search invoices..."
              className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
            />
          </div>
          <select className="px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent">
            <option>All Status</option>
            <option>Paid</option>
            <option>Pending</option>
            <option>Overdue</option>
          </select>
          <select className="px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent">
            <option>All Doctors</option>
            <option>Dr. Sarah Johnson</option>
            <option>Dr. Robert Davis</option>
            <option>Dr. Emily Brown</option>
          </select>
          <button className="px-4 py-2 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors duration-200 flex items-center space-x-2">
            <Filter className="h-4 w-4" />
            <span>More Filters</span>
          </button>
        </div>
      </div>

      {/* Invoices Table */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="text-left py-4 px-6 text-sm font-medium text-slate-600">Invoice</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-slate-600">Patient</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-slate-600">Doctor</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-slate-600">Date</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-slate-600">Due Date</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-slate-600">Amount</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-slate-600">Status</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-slate-600">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {invoices.map((invoice) => (
                <tr key={invoice.id} className="hover:bg-slate-50 transition-colors duration-200">
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-2">
                      <FileText className="h-4 w-4 text-slate-400" />
                      <span className="font-medium text-slate-900">{invoice.id}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-sm text-slate-900">{invoice.patientName}</td>
                  <td className="py-4 px-6 text-sm text-slate-600">{invoice.doctor}</td>
                  <td className="py-4 px-6 text-sm text-slate-600">{invoice.date}</td>
                  <td className="py-4 px-6 text-sm text-slate-600">{invoice.dueDate}</td>
                  <td className="py-4 px-6 text-sm font-medium text-slate-900">${invoice.amount.toFixed(2)}</td>
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full flex items-center space-x-1 ${getStatusColor(invoice.status)}`}>
                        {getStatusIcon(invoice.status)}
                        <span>{invoice.status}</span>
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-2">
                      <button 
                        onClick={() => setSelectedInvoice(invoice)}
                        className="p-1 text-slate-400 hover:text-sky-600 rounded transition-colors duration-200"
                        title="View Invoice"
                      >
                        <Eye className="h-4 w-4" />
                      </button>
                      <button className="p-1 text-slate-400 hover:text-slate-600 rounded transition-colors duration-200" title="Download">
                        <Download className="h-4 w-4" />
                      </button>
                      <button className="p-1 text-slate-400 hover:text-slate-600 rounded transition-colors duration-200" title="Send">
                        <Send className="h-4 w-4" />
                      </button>
                      <button className="p-1 text-slate-400 hover:text-slate-600 rounded transition-colors duration-200">
                        <MoreHorizontal className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Invoice Detail Modal */}
      {selectedInvoice && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-slate-200">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">Invoice {selectedInvoice.id}</h2>
                  <p className="text-slate-600">Generated on {selectedInvoice.date}</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className={`px-3 py-1 text-sm font-medium rounded-full flex items-center space-x-2 ${getStatusColor(selectedInvoice.status)}`}>
                    {getStatusIcon(selectedInvoice.status)}
                    <span>{selectedInvoice.status}</span>
                  </span>
                  <button 
                    onClick={() => setSelectedInvoice(null)}
                    className="p-2 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition-all duration-200"
                  >
                    ×
                  </button>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              {/* Invoice Header */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">Bill To:</h3>
                  <div className="space-y-1">
                    <p className="font-medium text-slate-900">{selectedInvoice.patientName}</p>
                    <p className="text-slate-600">Patient</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">Invoice Details:</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Invoice Date:</span>
                      <span className="font-medium">{selectedInvoice.date}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Due Date:</span>
                      <span className="font-medium">{selectedInvoice.dueDate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Doctor:</span>
                      <span className="font-medium">{selectedInvoice.doctor}</span>
                    </div>
                    {selectedInvoice.paidDate && (
                      <div className="flex justify-between">
                        <span className="text-slate-600">Paid Date:</span>
                        <span className="font-medium text-emerald-600">{selectedInvoice.paidDate}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Services Table */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Services</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border border-slate-200 rounded-lg">
                    <thead className="bg-slate-50">
                      <tr>
                        <th className="text-left py-3 px-4 text-sm font-medium text-slate-600">Service</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-slate-600">Quantity</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-slate-600">Rate</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-slate-600">Amount</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {selectedInvoice.services.map((service: any, index: number) => (
                        <tr key={index}>
                          <td className="py-3 px-4 text-sm text-slate-900">{service.name}</td>
                          <td className="py-3 px-4 text-sm text-slate-600">{service.quantity}</td>
                          <td className="py-3 px-4 text-sm text-slate-600">${service.rate.toFixed(2)}</td>
                          <td className="py-3 px-4 text-sm font-medium text-slate-900">${service.amount.toFixed(2)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Total */}
              <div className="flex justify-end">
                <div className="w-64">
                  <div className="bg-slate-50 rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold text-slate-900">Total Amount:</span>
                      <span className="text-2xl font-bold text-slate-900">${selectedInvoice.amount.toFixed(2)}</span>
                    </div>
                    {selectedInvoice.paymentMethod && (
                      <div className="flex justify-between items-center mt-2 pt-2 border-t border-slate-200">
                        <span className="text-sm text-slate-600">Payment Method:</span>
                        <span className="text-sm font-medium text-emerald-600">{selectedInvoice.paymentMethod}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex justify-end space-x-3 mt-6 pt-6 border-t border-slate-200">
                <button className="px-4 py-2 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors duration-200 flex items-center space-x-2">
                  <Download className="h-4 w-4" />
                  <span>Download PDF</span>
                </button>
                <button className="px-4 py-2 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors duration-200 flex items-center space-x-2">
                  <Send className="h-4 w-4" />
                  <span>Send Email</span>
                </button>
                {selectedInvoice.status !== 'Paid' && (
                  <button className="bg-sky-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-sky-700 transition-all duration-200">
                    Mark as Paid
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}