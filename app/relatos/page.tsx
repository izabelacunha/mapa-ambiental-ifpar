'use client';
import { useEffect, useState } from 'react';

export default function ConsultaRelatosPage() {
  const [relatos, setRelatos] = useState<any[]>([]);

  useEffect(() => {
    fetch('/api/relatos')
      .then((res) => res.json())
      .then((data) => setRelatos(data));
  }, []);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-emerald-900">Relatos e Sugestões Ambientais</h2>

      <div className="grid md:grid-cols-2 gap-4">
        {relatos.map((item) => (
          <div key={item.id} className="bg-white p-5 rounded-xl border border-emerald-100 shadow-sm space-y-3">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-xs bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-bold">
                  {item.categoria}
                </span>
                <h3 className="font-bold text-slate-800 text-lg mt-1">{item.titulo}</h3>
              </div>
              <span className={`text-xs px-2.5 py-1 rounded-full font-bold ${
                item.status === 'Resolvido' ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-800'
              }`}>
                {item.status}
              </span>
            </div>

            <p className="text-sm text-slate-600">{item.descricao}</p>

            <div className="text-xs text-slate-400 border-t pt-2 flex justify-between">
              <span>📍 {item.local}</span>
              <span>📅 {item.data}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}