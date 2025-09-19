import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-100 text-center p-4 mt-6 border-t border-gray-200">
      <p className="text-sm text-gray-600">
        © {new Date().getFullYear()} Government Exams Portal | Built with ❤️ by Final Year Students
      </p>
    </footer>
  );
}

export default Footer;
