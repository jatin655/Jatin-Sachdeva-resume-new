"use client"

export default function PrintStyles() {
  return (
    <style jsx global>{`
      @media print {
        /* Page setup */
        @page {
          margin: 0.5in;
          size: A4;
        }

        /* Hide interactive elements */
        .print\\:hidden {
          display: none !important;
        }

        /* Reset colors for print */
        * {
          -webkit-print-color-adjust: exact !important;
          color-adjust: exact !important;
          print-color-adjust: exact !important;
        }

        /* Body styles */
        body {
          background: white !important;
          color: black !important;
          font-size: 12px !important;
          line-height: 1.4 !important;
        }

        /* Container adjustments */
        .print\\:bg-white {
          background: white !important;
        }

        .print\\:text-black {
          color: black !important;
        }

        .print\\:pt-0 {
          padding-top: 0 !important;
        }

        .print\\:space-y-4 > * + * {
          margin-top: 1rem !important;
        }

        .print\\:max-w-none {
          max-width: none !important;
        }

        .print\\:px-0 {
          padding-left: 0 !important;
          padding-right: 0 !important;
        }

        /* Section spacing */
        section {
          page-break-inside: avoid;
          margin-bottom: 1rem !important;
        }

        /* Header adjustments */
        h1 {
          font-size: 24px !important;
          margin-bottom: 8px !important;
        }

        h2 {
          font-size: 18px !important;
          margin-bottom: 12px !important;
          color: #1f2937 !important;
        }

        h3 {
          font-size: 16px !important;
          margin-bottom: 8px !important;
          color: #374151 !important;
        }

        /* Remove shadows and rounded corners */
        .shadow-lg,
        .shadow-xl {
          box-shadow: none !important;
          border: 1px solid #e5e7eb !important;
        }

        .rounded-lg,
        .rounded-xl {
          border-radius: 4px !important;
        }

        /* Simplify gradients for print */
        .bg-gradient-to-r {
          background: #1f2937 !important;
          -webkit-background-clip: text !important;
          background-clip: text !important;
          color: #1f2937 !important;
        }

        /* Skills section adjustments */
        .grid {
          display: grid !important;
          gap: 0.5rem !important;
        }

        .grid-cols-2 {
          grid-template-columns: repeat(2, 1fr) !important;
        }

        .grid-cols-4 {
          grid-template-columns: repeat(4, 1fr) !important;
        }

        /* Certificate cards - make them stack vertically */
        .overflow-x-auto {
          overflow: visible !important;
        }

        .flex.gap-6.min-w-max {
          display: grid !important;
          grid-template-columns: repeat(2, 1fr) !important;
          gap: 1rem !important;
          width: 100% !important;
        }

        .min-w-80 {
          min-width: auto !important;
          width: 100% !important;
        }

        /* Progress bars */
        .bg-blue-600,
        .bg-indigo-400 {
          background: #374151 !important;
        }

        /* Icons - make them smaller for print */
        svg {
          width: 16px !important;
          height: 16px !important;
        }

        /* Remove hover effects */
        .hover\\:scale-105:hover {
          transform: none !important;
        }

        .hover\\:shadow-2xl:hover {
          box-shadow: none !important;
        }

        /* Ensure text is readable */
        .text-gray-300,
        .text-gray-400,
        .text-gray-500,
        .text-gray-600 {
          color: #374151 !important;
        }

        /* Work experience timeline */
        .border-l-4 {
          border-left: 2px solid #374151 !important;
        }

        /* Contact info grid */
        .md\\:grid-cols-2 {
          grid-template-columns: repeat(2, 1fr) !important;
        }

        /* Remove transitions and animations */
        .transition-all,
        .transition-colors {
          transition: none !important;
        }

        /* Page breaks */
        .page-break-before {
          page-break-before: always;
        }

        .page-break-after {
          page-break-after: always;
        }

        .page-break-inside-avoid {
          page-break-inside: avoid;
        }
      }
    `}</style>
  )
}
