      document.getElementById('year').textContent = new Date().getFullYear();

      // Small pointer interaction for desktop users.
      const terminal = document.querySelector('.terminal');
      if (window.matchMedia('(pointer:fine)').matches) {
        terminal.addEventListener('mousemove', (event) => {
          const rect = terminal.getBoundingClientRect();
          const x = (event.clientX - rect.left) / rect.width - 0.5;
          const y = (event.clientY - rect.top) / rect.height - 0.5;
          terminal.style.transform = `perspective(900px) rotateX(${(-y * 3).toFixed(2)}deg) rotateY(${(x * 4).toFixed(2)}deg) translateY(-4px)`;
        });

        terminal.addEventListener('mouseleave', () => {
          terminal.style.transform = 'perspective(900px) rotateX(2deg)';
        });
      }