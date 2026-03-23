import React, { useState } from 'react';
import { X, Mail, Lock, ArrowRight } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity" onClick={onClose} />
      
      <div className="relative w-full max-w-md border border-white/10 bg-[#09090b] shadow-[0_0_80px_rgba(255,45,139,0.15)] rounded-lg overflow-hidden animate-in zoom-in-95 duration-300">
        <button onClick={onClose} className="absolute top-4 right-4 text-white/50 hover:text-white z-10 transition-colors">
          <X className="w-5 h-5" />
        </button>

        <div className="p-10">
          <div className="w-12 h-[1px] bg-gradient-to-r from-[#D4AF37] to-transparent mb-8" />
          
          <h2 className="text-3xl font-headline italic tracking-tighter text-white mb-2">
            {isLogin ? 'Iniciar Sesión' : 'Únete a la Élite'}
          </h2>
          <p className="text-zinc-400 font-sans text-sm mb-8 leading-relaxed">
            {isLogin ? 'Accede a tu historial de compras y beneficios exclusivos.' : 'Regístrate para asegurar las piezas de colección antes que nadie.'}
          </p>

          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert(`Autenticación simulada: Datos enrutados al correo para ${email}`); onClose(); }}>
            <div className="relative group">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30 group-focus-within:text-[#D4AF37] transition-colors" />
              <input 
                type="email" 
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Correo electrónico" 
                className="w-full bg-[#0a0a0c] border border-white/10 text-white pl-12 pr-4 py-4 rounded-sm font-sans text-sm outline-none focus:border-[#D4AF37]/50 transition-colors"
                />
            </div>
            
            <div className="relative group">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30 group-focus-within:text-[#D4AF37] transition-colors" />
              <input 
                type="password" 
                required
                placeholder="Contraseña" 
                className="w-full bg-[#0a0a0c] border border-white/10 text-white pl-12 pr-4 py-4 rounded-sm font-sans text-sm outline-none focus:border-[#D4AF37]/50 transition-colors"
                />
            </div>

            <button type="submit" className="w-full bg-[#D4AF37] text-black py-4 rounded-sm flex items-center justify-center gap-3 font-sans font-medium text-[10px] tracking-[0.3em] uppercase hover:bg-white transition-colors mt-8">
              {isLogin ? 'ENTRAR' : 'CREAR CUENTA'} <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <div className="mt-8 text-center">
            <button 
              onClick={() => setIsLogin(!isLogin)}
              className="text-zinc-500 hover:text-white text-sm transition-colors border-b border-white/20 pb-1"
            >
              {isLogin ? '¿No tienes cuenta? Solicita acceso aquí' : '¿Ya eres miembro? Inicia sesión'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AuthModal;
