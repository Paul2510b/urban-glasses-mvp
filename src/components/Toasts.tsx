import { ShoppingCartIcon, CheckIcon } from '@/components/icons';
import { useAppStore } from '@/store/appStore';

// Custom Info Icon
const InfoIconComp = ({ className = '', size = 20 }: { className?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <circle cx="12" cy="12" r="10"/>
    <line x1="12" x2="12" y1="16" y2="12"/>
    <line x1="12" x2="12.01" y1="8" y2="8"/>
  </svg>
);

const Toasts = () => {
  const { toasts, removeToast } = useAppStore();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed top-6 right-6 z-[999999] flex flex-col gap-2 pointer-events-none">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="pointer-events-auto bg-[#0e0e12] border border-white/10 px-5 py-4 min-w-[260px] flex items-center gap-3"
          style={{ animation: 'slideIn 0.4s cubic-bezier(0.16, 1, 0.3, 1)' }}
        >
          {toast.type === 'cart' && (
            <div className="w-8 h-8 flex items-center justify-center bg-[#e8193c]/10 rounded-sm text-[#e8193c]">
              <ShoppingCartIcon size={16} />
            </div>
          )}
          {toast.type === 'info' && (
            <div className="w-8 h-8 flex items-center justify-center bg-[#00d4e8]/10 rounded-sm text-[#00d4e8]">
              <InfoIconComp size={16} />
            </div>
          )}
          {toast.type === 'success' && (
            <div className="w-8 h-8 flex items-center justify-center bg-[#25D366]/10 rounded-sm text-[#25D366]">
              <CheckIcon size={16} />
            </div>
          )}
          <span className="text-sm text-white">{toast.message}</span>
          <button
            onClick={() => removeToast(toast.id)}
            className="ml-auto text-white/40 hover:text-white transition-colors"
          >
            ×
          </button>
        </div>
      ))}
      
      <style>{`
        @keyframes slideIn {
          from {
            transform: translateX(120%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default Toasts;
