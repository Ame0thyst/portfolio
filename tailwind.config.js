module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}", // Path ke semua file yang akan menggunakan Tailwind
    ],
    darkMode: 'class', // Menambahkan opsi untuk mendukung mode dark berbasis class
    theme: {
        extend: {
          keyframes: {
            'move-down': {
              '0%': { transform: 'translateY(-100%)' },
              '100%': { transform: 'translateY(100%)' },
            },
            'move-up': {
              '0%': { transform: 'translateY(100%)' },
              '100%': { transform: 'translateY(-100%)' },
            },
          },
          animation: {
            'move-down': 'move-down 10s infinite linear',
            'move-up': 'move-up 10s infinite linear',
          },
        },
      },
      plugins: [],
    }