    // Configuration
        const CRYPTO_WALLET = 'bc1qqdsn6q02xn6mudntnt4ak2hfd89dgflzkuazdp';
        // Initialize
        document.addEventListener('DOMContentLoaded', () => {
            // Set QR Code & Wallet
            document.getElementById('walletAddress').textContent = CRYPTO_WALLET;
            document.getElementById('qrImage').src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${CRYPTO_WALLET}`;

            // Method Selection
            document.querySelectorAll('.method-card').forEach(card => {
                card.addEventListener('click', () => {
                    const method = card.dataset.method;
                    closeAllModals();
                    if (method === 'card') {
                        openModal('cardModal');
                    } else if (method === 'crypto') {
                        openModal('cryptoModal');
                    } else {
                        openModal('comingSoonModal');
                    }
                });
            });

            // Close buttons & backdrop click
            document.querySelectorAll('.close-btn').forEach(btn => {
                btn.addEventListener('click', (e) => closeAllModals());
            });
            document.querySelectorAll('.modal-overlay').forEach(overlay => {
                overlay.addEventListener('click', (e) => {
                    if (e.target === overlay) closeAllModals();
                });
            });

            // Card Form Submit
            document.getElementById('cardForm').addEventListener('submit', (e) => {
                e.preventDefault();
                closeAllModals();
                setTimeout(() => openModal('failedModal'), 300);
            });

            // Crypto Confirm Button
            document.getElementById('cryptoConfirmBtn').addEventListener('click', () => {
                closeAllModals();
                setTimeout(() => openModal('failedModal'), 300);
            });

            // Retry Button
            document.getElementById('retryBtn').addEventListener('click', () => {
                closeAllModals();
            });
        });

        // Modal Helpers
        function openModal(id) {
            document.getElementById(id).classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeAllModals() {
            document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
            document.body.style.overflow = 'auto';
        }

        // Simple card number formatting
        document.querySelector('#cardForm input[placeholder="0000 0000 0000 0000"]').addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            value = value.replace(/(\d{4})(?=\d)/g, '$1 ');
            e.target.value = value.substring(0, 19);
        });