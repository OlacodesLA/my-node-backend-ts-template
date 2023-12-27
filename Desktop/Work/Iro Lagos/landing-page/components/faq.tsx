import { Disclosure, Transition } from "@headlessui/react";
import Reveal from "./Animations/Reveal";
import {
  MinusSquare,
  PlusIcon,
  PlusSquare,
  PlusSquareIcon,
} from "lucide-react";

const faqs = [
  {
    question: "How long does shipping take?",
    answer:
      "Shipping times can vary depending on your location and the shipping method chosen. Typically, standard shipping takes 3-5 business days.",
  },
  {
    question: "What is your return policy?",
    answer: `We offer a 30-day return policy. If you're not satisfied with your purchase, you can return the item within 30 days of receipt for a refund or exchange. Please make sure the item is in its original condition with all tags and packaging intact.`,
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "Yes, we offer international shipping to select countries. During the checkout process, you can enter your shipping address to see if we ship to your location. Please note that additional customs fees and taxes may apply.",
  },
  {
    question: "How can I track my order?",
    answer:
      "Once your order has been placed, you would be able to track the progress of your package on our website at your profile page.",
  },
  {
    question: "Can I change or cancel my order?",
    answer:
      "If you need to make changes to your order or cancel it, please contact our customer support as soon as possible. We will do our best to accommodate your request, but please note that once the order has been processed and shipped, changes or cancellations may not be possible.",
  },
];

export default function Faq() {
  return (
    <div className="bg-gradient-to-b from-rose-100 to-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:py-40 lg:px-8">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-2xl font-bold  text-center leading-10 tracking-wide text-gray-900">
            Frequently asked questions
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10 transition-transform duration-300 transform">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <Reveal className="w-full">
                    <div className="w-full">
                      <dt className="w-full">
                        <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                          <span className="text-base font-semibold leading-7">
                            {faq.question}
                          </span>
                          <span className="ml-6 flex h-7 items-center">
                            {open ? (
                              <PlusSquare
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            ) : (
                              <MinusSquare
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            )}
                          </span>
                        </Disclosure.Button>
                      </dt>
                      <Transition
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                      >
                        <Disclosure.Panel as="dd" className="mt-2 pr-12">
                          <p className="text-base leading-7 text-gray-600">
                            {faq.answer}
                          </p>
                        </Disclosure.Panel>
                      </Transition>
                    </div>
                  </Reveal>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
