'use client'

import React, { useState, ReactElement } from 'react'
import {
  IconBuildingBank,
  IconCheck,
  IconCreditCard,
  IconFileInvoice,
  IconReportMoney,
  IconSearch,
} from '@tabler/icons-react'

const products = [
  {
    id: 'business-line-of-credit',
    icon: <IconCreditCard />,
    title: 'Business Line of Credit',
  },
  {
    id: 'sba-loan',
    icon: <IconBuildingBank />,
    title: 'SBA Loan',
  },
  {
    id: 'revenue-based-financing',
    icon: <IconReportMoney />,
    title: 'Revenue Based Financing',
  },
  {
    id: 'invoice-factoring',
    icon: <IconFileInvoice />,
    title: 'Invoice Factoring',
  },
]

interface TabInfoItemProps {
  active?: boolean
  icon: ReactElement<{ className?: string }>
  onClick?: () => void
  title: string
}

const TabInfoItem = ({ active, icon, onClick, title }: TabInfoItemProps) => (
  <div
    onClick={onClick}
    className={`
      cursor-pointer flex flex-col items-center justify-start rounded-xl px-6 py-5 text-center text-sm font-semibold
      transition-all shadow-sm hover:shadow-md
      ${
        active
          ? 'bg-white dark:bg-slate-700 shadow-lg'
          : 'bg-slate-50 dark:bg-slate-800 hover:bg-white dark:hover:bg-slate-700'
      }
    `}
  >
    {React.cloneElement(icon, {
      className: 'w-8 h-8 text-violet-600 dark:text-violet-400',
    })}
    <span className="mt-3">{title}</span>
  </div>
)

const FeatureList = ({ items }: { items: string[] }) => (
  <ul className="mt-6 mb-8 text-sm text-violet-100 space-y-2">
    {items.map((text, idx) => (
      <li key={idx} className="flex items-center">
        <IconCheck className="mr-3 text-white" />
        {text}
      </li>
    ))}
  </ul>
)

const SectionHeader = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <div className="text-center md:text-left">
    <h2 className="text-4xl font-extrabold text-white leading-tight">
      {title.split('\n').map((line, i) => (
        <div key={i}>{line}</div>
      ))}
    </h2>
    <p className="mt-2 text-sm text-violet-100">{subtitle}</p>
  </div>
)

const SectionForm = ({ children }: { children: React.ReactNode }) => (
  <form className="flex flex-col gap-4 md:ml-8">{children}</form>
)

const SectionInput = (props: React.InputHTMLAttributes<HTMLInputElement>) => (
  <input {...props} className="rounded-md px-4 py-3 text-sm font-light" />
)

const SectionSelect = ({
  options,
  placeholder,
}: {
  options: string[]
  placeholder: string
}) => (
  <select className="rounded-md px-4 py-3 text-sm font-light bg-white text-black">
    <option disabled selected value="">
      {placeholder}
    </option>
    {options.map((opt, idx) => (
      <option key={idx} value={opt}>
        {opt}
      </option>
    ))}
  </select>
)

const SubmitButton = ({ text }: { text: string }) => (
  <button
    type="submit"
    className="flex items-center justify-center rounded-md bg-violet-900 px-4 py-3 font-semibold text-white shadow-md shadow-violet-700 transition hover:bg-slate-900"
  >
    <IconSearch className="mr-2" />
    {text}
  </button>
)

// Info Sections
const infoSections: Record<string, React.ReactElement> = { 
  'business-line-of-credit': (
    <>
      <SectionHeader
        title="Business Line\nof Credit"
        subtitle="Pay interest only on what you use"
      />
      <FeatureList items={['High credit limit', 'Fast disbursement, anytime']} />
      <SectionForm>
        <SectionInput type="number" min={0} placeholder="How much do you need?" />
        <SubmitButton text="Find the best limit" />
      </SectionForm>
    </>
  ),
  'sba-loan': (
    <>
      <SectionHeader
        title="SBA Loan"
        subtitle="Find SBA-guaranteed loan near your business"
      />
      <FeatureList
        items={['Competitive terms', 'Counseling and education', 'Unique benefits']}
      />
      <SectionForm>
        <SectionInput type="text" placeholder="Your Zip Code" />
        <SubmitButton text="Find lenders" />
      </SectionForm>
    </>
  ),
  'revenue-based-financing': (
    <>
      <SectionHeader
        title="Revenue Based\nFinancing"
        subtitle="Your sales is doing great? Use it to get more finance support"
      />
      <FeatureList
        items={[
          'No authority over use of capital',
          'No assets or collateral required',
          'Flexible repayment terms',
        ]}
      />
      <SectionForm>
        <SectionSelect
          placeholder="Business operating time"
          options={[
            'Less than 3 months',
            '3 - 6 months',
            '7 - 11 months',
            '1 - 2 years',
            'More than 2 years',
          ]}
        />
        <SectionSelect
          placeholder="Revenue"
          options={[
            'Less than $5,000',
            '$5,000 - $10,000',
            'More than $10,000',
          ]}
        />
        <SubmitButton text="Find options" />
      </SectionForm>
    </>
  ),
  'invoice-factoring': (
    <>
      <SectionHeader
        title="Invoice Factoring"
        subtitle="Get early cash before your customer pays the bill"
      />
      <FeatureList items={['Customized programs', 'Fast disbursement']} />
      <SectionForm>
        <SectionSelect
          placeholder="Monthly invoicing volume"
          options={['Less than 500', '500 - 2000', 'More than 2000']}
        />
        <SubmitButton text="Find partners" />
      </SectionForm>
    </>
  ),
}

export default function Skills() {
  const [selectedProductId, setSelectedProductId] = useState(products[0].id)

  return (
    <section className="container mx-auto px-8 py-28 sm:px-12">
      <h1 className="text-4xl font-extrabold text-center mb-24 dark:text-white">
        We provide <span className="text-violet-500">a variety of choices</span>{' '}
        for any kind of situation
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map(({ icon, id, title }) => (
          <TabInfoItem
            key={id}
            active={id === selectedProductId}
            icon={icon}
            title={title}
            onClick={() => setSelectedProductId(id)}
          />
        ))}
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 rounded-xl bg-violet-600 py-12 px-6 md:px-14">
        {infoSections[selectedProductId]}
      </div>
    </section>
  )
}
