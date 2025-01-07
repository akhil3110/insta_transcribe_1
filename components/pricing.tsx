import { PricingCard } from "./pricing-card";

declare global {
  interface Window {
    RazorPay: any
  }
}

const pricingPlans = [
    {
      name: 'free',
      price: '$0',
      features: [
        'Up to 2 videos per month',
        'Basic transcription accuracy',
        'Standard support',
      ],
    },
    {
      name: 'Pro',
      price: '$20',
      features: [
        'Up to 50 videos per month',
        'Enhanced accuracy',
        'Change color of text',
        'Get Transcription file',
        'Edit Transcripiom',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: '$99',
      features: [
        'Unlimited videos',
        'Highest accuracy',
        '24/7 support',
        'API access',
        'Custom integration'
      ],
    },
  ];

const Pricing = () => {

    return ( 
      <section id="pricing" className="py-20 bg-gradient-to-b from-white to-indigo-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Simple Transparent Pricing</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">Choose the plan that&apos;s right for you</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>
      </div>
    </section>
     );
}
 
export default Pricing;