export default function Footer() {
  return (
    <footer className="bg-primary text-white py-8 mt-20">
      <div className="container mx-auto max-w-6xl flex justify-between items-center flex-wrap gap-4">
        <p>&copy; {new Date().getFullYear()} Kanchen Academy. All rights reserved.</p>
        <div className="flex space-x-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:underline">
            Facebook
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:underline">
            Twitter
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:underline">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  )
}
