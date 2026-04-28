'use client';
import { useState } from 'react';

export const Form = () => {
  const [status, setStatus] = useState<null | 'success' | 'error'>(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-full pt-4 pb-30">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-4xl border-4 border-[#131318] rounded-xl mt-6 mb-4 p-6 space-y-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label className="font-sans text-xs tracking-[3px] mb-1 ml-2">
              NOMBRE
            </label>
            <input
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Tu nombre"
              className="bg-background-secondary p-3 rounded-md outline-none transition-all duration-300 focus:ring-2 focus:ring-[#00f0ff]/50 font-sans"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="font-sans text-xs tracking-[3px] mb-1 ml-2">
              EMAIL
            </label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="tu@email.com"
              className="bg-background-secondary p-3 rounded-md outline-none transition-all duration-300 focus:ring-2 focus:ring-[#00f0ff]/50 font-sans"
              required
            />
          </div>
        </div>
        <div className="flex flex-col mt-14">
          <label className="font-sans text-xs tracking-[3px] mb-1 ml-2">
            ESPECIFICACIONES DEL PROYECTO
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Cuéntanos tu idea, que personaje quieres..."
            className="bg-background-secondary p-3 rounded-md outline-none transition-all duration-300 focus:ring-2 focus:ring-[#00f0ff]/50 resize-none min-h-36 font-sans"
            required
          />
        </div>

        <div className="flex justify-between w-full mt-10 md:mt-20">
          <div className="hidden md:flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="#00f0ff"
              className="icon icon-tabler icons-tabler-filled icon-tabler-circle"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M7 3.34a10 10 0 1 1 -4.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 4.995 -8.336z" />
            </svg>
            <span className="font-sans text-xs text-[#00f0ff] ml-3 tracking-[2px]">
              SISTEMAS ONLINE
            </span>
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`flex justify-center items-center text-sm md:text-base w-full md:w-xs py-4 px-10 min-w-60 rounded-md font-display font-bold tracking-[3px] transition-all duration-300
    ${
      loading
        ? 'bg-[#cd95fd]/50 cursor-not-allowed'
        : 'bg-[#cd95fd] text-[#37005F] cursor-pointer hover:scale-95 hover:shadow-[0_0_30px_rgba(205,149,253,0.9)]'
    }`}
          >
            {loading ? 'ENVIANDO...' : 'TRANSMITIR DATOS'}

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="#37005F"
              className="icon icon-tabler icons-tabler-filled icon-tabler-arrow-badge-right ml-4"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M7 6l-.112 .006a1 1 0 0 0 -.669 1.619l3.501 4.375l-3.5 4.375a1 1 0 0 0 .78 1.625h6a1 1 0 0 0 .78 -.375l4 -5a1 1 0 0 0 0 -1.25l-4 -5a1 1 0 0 0 -.78 -.375h-6z" />
            </svg>
          </button>
        </div>
      </form>

      {status === 'success' && (
        <p className="font-sans text-green-400 mt-4">
          Mensaje enviado correctamente
        </p>
      )}

      {status === 'error' && (
        <p className="font-sans text-red-400 mt-4">
          Error al enviar el mensaje
        </p>
      )}
    </div>
  );
};
