import React from 'react';

interface PricingCardProps {
  size: string;
  price: number;
  description: string;
  features: string[];
  popular?: boolean;
}

export default function PricingCard({ size, price, description, features, popular }: PricingCardProps) {
  return (
    <div className={`rounded-lg shadow-lg p-6 ${popular ? 'border-2 border-red-500' : 'border border-gray-200'}`}>
      {popular && (
        <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
          Most Popular
        </span>
      )}
      <h3 className="text-2xl font-bold">{size}"</h3>
      <p className="text-gray-600 mt-2">{description}</p>
      <div className="mt-4">
        <span className="text-4xl font-bold">${price}</span>
      </div>
      <ul className="mt-6 space-y-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <button className="mt-8 w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition duration-300">
        Order Now
      </button>
    </div>
  );
}
