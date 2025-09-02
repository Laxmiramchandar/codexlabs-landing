export default function Contact() {
  return (
    <section id="contact" className="px-8 py-16 text-center">
      <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        Reach out for collaborations, training, or services.
      </p>
      <a
        href="mailto:codexlabs@gmail.com"
        className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
      >
        Send Email
      </a>
    </section>
  );
}
