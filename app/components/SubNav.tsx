"use client";

import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "lucide-react";

const menuPanels = {
  Products: [
    { title: "Analytics", desc: "Track real-time user metrics." },
    { title: "Billing", desc: "Manage billing with ease." },
    { title: "Security", desc: "Best-in-class protection." },
  ],
  Services: [
    { title: "Consulting", desc: "Tailored strategies for growth." },
    { title: "Support", desc: "24/7 expert assistance." },
    { title: "Custom Dev", desc: "Solutions built for your needs." },
  ],
  Company: [
    { title: "About Us", desc: "Get to know our mission." },
    { title: "Careers", desc: "Work with an amazing team." },
    { title: "Contact", desc: "We'd love to hear from you." },
  ],
};

export default function SubNavMegaMenu() {
  return (
    <div className="relative shadow-md z-40">
      <div className="flex justify-center space-x-12 py-4">
        {Object.keys(menuPanels).map((category) => (
          <Menu as="div" key={category} className="relative">
            <Menu.Button className="text-gray-700 hover:text-indigo-600 text-sm font-semibold inline-flex items-center">
              {category}
              <ChevronDownIcon className="w-4 h-4 ml-1" />
            </Menu.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 -translate-y-2"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 -translate-y-2"
            >
              <Menu.Items className="fixed left-0 top-16 w-screen bg-white shadow-2xl border-t border-gray-200 z-50">
                <div className="px-12 py-8 grid grid-cols-3 gap-12">
                  {menuPanels[category as keyof typeof menuPanels].map((item) => (
                    <div key={item.title}>
                      <p className="font-semibold text-gray-900 text-base">{item.title}</p>
                      <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        ))}
      </div>
    </div>
  );
}
