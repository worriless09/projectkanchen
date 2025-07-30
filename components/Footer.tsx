import Link from 'next/link';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  const cols = [
    {
      title: 'Courses',
      links: [
        { name: 'UPSC', href: '/courses/upsc' },
        { name: 'SSC', href: '/courses/ssc' },
        { name: 'State PCS', href: '/courses/state-pcs' },
        { name: 'Banking', href: '/courses/banking' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Study Material', href: '/resources/study-material' },
        { name: 'Mock Tests', href: '/resources/mock-tests' },
        { name: 'Current Affairs', href: '/resources/current-affairs' },
        { name: 'PYQ', href: '/resources/previous-papers' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About', href: '/about' },
        { name: 'Faculty', href: '/faculty' },
        { name: 'Success Stories', href: '/success-stories' },
        { name: 'Contact', href: '/contact' },
      ],
    },
  ];

  const socials = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-ink text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-5 gap-10">
        {/* Brand & contact */}
        <div className="lg:col-span-2 space-y-6">
          <Link href="/" className="text-2xl font-bold text-accent">
            Kanchen Academy
          </Link>

          <p className="text-gray-300 max-w-md">
            AI-powered learning and expert mentoring for UPSC, SSC and State PCS
            aspirants.
          </p>

          <div className="space-y-2 text-sm text-gray-300">
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4 text-primary" />
              <span>contact@kanchenacademy.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4 text-primary" />
              <span>+91 98 765 43210</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4 text-primary" />
              <span>New Delhi, India</span>
            </div>
          </div>

          {/* Socials */}
          <div className="flex space-x-4 pt-4">
            {socials.map(({ icon: Icon, href, label }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Icon className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {cols.map((col) => (
          <div key={col.title}>
            <h4 className="font-semibold text-accent mb-4">{col.title}</h4>
            <ul className="space-y-2">
              {col.links.map((l) => (
                <li key={l.name}>
                  <Link
                    href={l.href}
                    className="text-gray-300 hover:text-primary transition-colors text-sm"
                  >
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* bottom */}
      <div className="border-t border-white/10 py-6 text-center text-sm text-gray-400">
        © {year} Kanchen Academy. All rights reserved.
      </div>
    </footer>
  );
}
