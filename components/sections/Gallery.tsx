"use client";
import { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';

const images = [
  { src: '/gallery/صباغ-الكويت.webp',       alt: 'صباغ الكويت' },
  { src: '/gallery/اصباغ-الكويت.webp',       alt: 'اصباغ الكويت' },
  { src: '/gallery/خدمات-الصباغة.webp',      alt: 'خدمات الصباغة' },
  { src: '/gallery/صباغ-الجهراء.webp',       alt: 'صباغ الجهراء' },
  { src: '/gallery/صباغ-السالمية.webp',      alt: 'صباغ السالمية' },
  { src: '/gallery/صباغ-القرين.webp',        alt: 'صباغ القرين' },
  { src: '/gallery/صباغ-بالكويت.webp',       alt: 'صباغ بالكويت' },
  { src: '/gallery/صباغ-جابر-الاحمد.webp',   alt: 'صباغ جابر الاحمد' },
  { src: '/gallery/صباغ-حولي.webp',          alt: 'صباغ حولي' },
  { src: '/gallery/صباغ-رخيص.webp',          alt: 'صباغ رخيص' },
  { src: '/gallery/صباغ-سلوى.webp',          alt: 'صباغ سلوى' },
  { src: '/gallery/صباغ-شاطر-ورخيص.webp',    alt: 'صباغ شاطر ورخيص' },
  { src: '/gallery/صباغ-شاطر.webp',          alt: 'صباغ شاطر' },
  { src: '/gallery/صباغ-ممتاز.webp',         alt: 'صباغ ممتاز' },
  { src: '/gallery/صباغ-هندي.webp',          alt: 'صباغ هندي' },
  { src: '/gallery/اصباغ.webp',              alt: 'اصباغ' },
  { src: '/gallery/صباغ.webp',               alt: 'صباغ' },
];

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);

  const prev = useCallback(() => {
    setActiveIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length));
  }, []);

  const next = useCallback(() => {
    setActiveIndex((i) => (i === null ? null : (i + 1) % images.length));
  }, []);

  useEffect(() => {
    if (activeIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') next();
      if (e.key === 'ArrowRight') prev();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [activeIndex, close, prev, next]);

  return (
    <section
      aria-label="معرض أعمال صباغ الكويت"
      style={{ padding: '64px 20px', background: '#f8faff', direction: 'rtl' }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <p style={{ color: '#1565c0', fontWeight: 700, fontSize: '0.9rem', letterSpacing: 1, marginBottom: 8 }}>
            أعمالنا
          </p>
          <h2 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.2rem)', fontWeight: 800, color: '#012e8d', margin: 0 }}>
            معرض أعمال صباغ الكويت
          </h2>
          <p style={{ color: '#666', marginTop: 12, fontSize: '1rem', lineHeight: 1.7 }}>
            نماذج من أعمال الصباغة والدهانات التي نفّذناها في مختلف مناطق الكويت
          </p>
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: 16,
        }}>
          {images.map((img, index) => (
            <button
              key={img.src}
              onClick={() => setActiveIndex(index)}
              aria-label={`عرض صورة: ${img.alt}`}
              style={{
                position: 'relative',
                aspectRatio: '4/3',
                borderRadius: 12,
                overflow: 'hidden',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
                background: '#e0e7f5',
                boxShadow: '0 2px 12px rgba(1,46,141,.10)',
                transition: 'transform .2s, box-shadow .2s',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1.03)';
                (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 8px 28px rgba(1,46,141,.22)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1)';
                (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 2px 12px rgba(1,46,141,.10)';
              }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
                style={{ objectFit: 'cover' }}
                loading="lazy"
              />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(1,46,141,.55) 0%, transparent 50%)',
                display: 'flex', alignItems: 'flex-end', padding: '12px 14px',
              }}>
                <span style={{ color: '#fff', fontWeight: 600, fontSize: '0.85rem' }}>{img.alt}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {activeIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="عرض الصورة"
          onClick={close}
          style={{
            position: 'fixed', inset: 0, zIndex: 9999,
            background: 'rgba(0,0,0,.88)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
        >
          {/* Image container */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              maxWidth: 'min(90vw, 900px)',
              maxHeight: '85vh',
              width: '100%',
              aspectRatio: '4/3',
              borderRadius: 12,
              overflow: 'hidden',
            }}
          >
            <Image
              src={images[activeIndex].src}
              alt={images[activeIndex].alt}
              fill
              sizes="90vw"
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>

          {/* Close */}
          <button
            onClick={close}
            aria-label="إغلاق"
            style={{
              position: 'fixed', top: 20, left: 20,
              background: 'rgba(255,255,255,.15)', border: 'none',
              color: '#fff', borderRadius: '50%', width: 44, height: 44,
              fontSize: '1.4rem', cursor: 'pointer', display: 'flex',
              alignItems: 'center', justifyContent: 'center',
            }}
          >
            ✕
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="الصورة السابقة"
            style={{
              position: 'fixed', right: 16, top: '50%', transform: 'translateY(-50%)',
              background: 'rgba(255,255,255,.15)', border: 'none',
              color: '#fff', borderRadius: '50%', width: 48, height: 48,
              fontSize: '1.5rem', cursor: 'pointer', display: 'flex',
              alignItems: 'center', justifyContent: 'center',
            }}
          >
            ›
          </button>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="الصورة التالية"
            style={{
              position: 'fixed', left: 16, top: '50%', transform: 'translateY(-50%)',
              background: 'rgba(255,255,255,.15)', border: 'none',
              color: '#fff', borderRadius: '50%', width: 48, height: 48,
              fontSize: '1.5rem', cursor: 'pointer', display: 'flex',
              alignItems: 'center', justifyContent: 'center',
            }}
          >
            ‹
          </button>

          {/* Counter */}
          <div style={{
            position: 'fixed', bottom: 24, left: '50%', transform: 'translateX(-50%)',
            color: '#fff', fontSize: '0.9rem', background: 'rgba(0,0,0,.4)',
            padding: '4px 14px', borderRadius: 20,
          }}>
            {activeIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </section>
  );
}
