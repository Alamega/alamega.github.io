"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const INITIAL_SERVICES = [
  {
    id: "spring",
    desc: "Java Spring Boot REST API",
    link: "https://alamega-api.onrender.com",
    img: "/images/spring.svg",
  },
  {
    id: "next",
    desc: "Next JS",
    link: "https://alamega.onrender.com",
    img: "/images/next.svg",
  },
];

export default function Home() {
  const [statuses, setStatuses] = useState<Record<string, "loading" | "working">>({
    spring: "loading",
    next: "loading",
  });

  useEffect(() => {
    const checkService = async (id: string, link: string) => {
      try {
        await fetch(link, { mode: "no-cors" });
        setStatuses((prev) => ({ ...prev, [id]: "working" }));
      } catch (error) {
        console.error(`Ошибка при подключении к ${id}:`, error);
      }
    };

    INITIAL_SERVICES.forEach((service) => {
      checkService(service.id, service.link);
    });

    const interval = setInterval(() => {
      INITIAL_SERVICES.forEach((service) => {
        checkService(service.id, service.link);
      });
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-purple-950 to-black p-4 text-white selection:bg-purple-500 selection:text-white">
      {/* Карточка-контейнер */}
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-md transition-all duration-300 hover:border-white/20">
        {/* Заголовок */}
        <h1 className="mb-2 text-2xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Развилка!</h1>

        {/* Текст описания */}
        <p className="mb-6 text-sm leading-relaxed text-gray-400">
          Сервисы расположены в Docker-контейнерах на <span className="text-purple-400 font-medium">render.com</span> по бесплатному тарифному плану. Они
          автоматически отключаются, если в течение 50 секунд не получали запросы. Запуск контейнера занимает от 10 до 120 секунд.
        </p>

        {/* Список ссылок */}
        <div className="flex flex-col gap-3">
          {INITIAL_SERVICES.map((service) => {
            const isWorking = statuses[service.id] === "working";

            return (
              <a
                key={service.id}
                href={service.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-xl border border-white/5 bg-white/5 p-4 transition-all duration-200 hover:scale-[1.02] hover:bg-white/10 hover:shadow-lg hover:shadow-purple-500/10"
              >
                {/* Левая часть: Иконка + Имя */}
                <div className="flex items-center gap-3">
                  <div className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-black/40 p-2 border border-white/10 transition-colors group-hover:border-purple-500/50">
                    <Image src={service.img} alt={service.desc} width={24} height={24} className={`object-contain ${service.id === "next" ? "invert" : ""}`} />
                  </div>
                  <span className="font-medium tracking-wide text-gray-200 group-hover:text-white transition-colors">{service.desc}</span>
                </div>

                {/* Правая часть: Статус */}
                <div className="flex items-center gap-2 pl-4">
                  <span
                    className={`h-2 w-2 rounded-full ${isWorking ? "animate-pulse bg-emerald-500 shadow-[0_0_8px_#10b981]" : "animate-bounce bg-amber-500 shadow-[0_0_8px_#f59e0b]"}`}
                  />
                  <span className={`text-xs font-semibold uppercase tracking-wider ${isWorking ? "text-emerald-400" : "text-amber-400"}`}>
                    {isWorking ? "Работает" : "Запуск..."}
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </main>
  );
}
