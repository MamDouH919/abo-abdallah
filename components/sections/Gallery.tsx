"use client";
import { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { styled, alpha } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import CloseIcon from '@mui/icons-material/Close';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

// Alt text describes what is actually visible in each photo (file names are
// legacy keyword slugs and are kept so image URLs don't change).
const images = [
  { src: '/gallery/صباغ-الكويت.webp',       alt: 'باب خشبي داكن لمدخل منزل مع جدران خارجية بيضاء' },
  { src: '/gallery/اصباغ-الكويت.webp',       alt: 'ممر داخلي بجدران رمادية فاتحة وتجاليد بروفايل بيضاء' },
  { src: '/gallery/خدمات-الصباغة.webp',      alt: 'نماذج لألوان دهانات مختلفة في غرف المعيشة' },
  { src: '/gallery/صباغ-الجهراء.webp',       alt: 'صالة واسعة بجدران فاتحة وسقف جبس بإضاءة' },
  { src: '/gallery/صباغ-السالمية.webp',      alt: 'ممر داخلي بجدران بلون فاتح وأرضية لامعة' },
  { src: '/gallery/صباغ-القرين.webp',        alt: 'صالة بجدران بيضاء وسقف جبس بإضاءة مخفية' },
  { src: '/gallery/صباغ-بالكويت.webp',       alt: 'مدخل منزل بجدران بيضاء ودرج بدرابزين حديدي' },
  { src: '/gallery/صباغ-جابر-الاحمد.webp',   alt: 'غرفة بجدران بيضاء وسقف جبس بإضاءة زرقاء مخفية' },
  { src: '/gallery/صباغ-حولي.webp',          alt: 'غرفة نوم بجدران بيضاء وأرضية خشبية' },
  { src: '/gallery/صباغ-رخيص.webp',          alt: 'صالة بجدران بلون كريمي وأرضية رخامية' },
  { src: '/gallery/صباغ-سلوى.webp',          alt: 'غرفة فارغة بجدران بلون بيج وأرضية خشبية' },
  { src: '/gallery/صباغ-شاطر-ورخيص.webp',    alt: 'غرف معيشة وطعام ونوم بدهانات بألوان هادئة' },
  { src: '/gallery/صباغ-شاطر.webp',          alt: 'ممر بجدران فاتحة وإضاءة خطية في السقف' },
  { src: '/gallery/صباغ-ممتاز.webp',         alt: 'صالة معيشة مفتوحة بجدران بيج ودرج دائري' },
  { src: '/gallery/صباغ-هندي.webp',          alt: 'مدخل منزل بجدران بلون بيج وأرضية خشبية' },
  { src: '/gallery/اصباغ.webp',              alt: 'ممر طويل بجدران فاتحة وإضاءة سقف خطية' },
  { src: '/gallery/صباغ.webp',               alt: 'مجلس ومدخل فيلا بجدران بلون كريمي ودرج' },
];

const Section = styled('section')(({ theme }) => ({
  padding: theme.spacing(8, 2.5),
  background: alpha(theme.palette.primary.main, 0.04),
  direction: 'rtl',
}));

const Inner = styled('div')({
  maxWidth: 1100,
  margin: '0 auto',
});

const Header = styled('div')(({ theme }) => ({
  textAlign: 'center',
  marginBottom: theme.spacing(5),
}));

const Eyebrow = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.dark,
  fontWeight: 700,
  fontSize: '0.9rem',
  letterSpacing: 1,
  marginBottom: theme.spacing(1),
}));

const Heading = styled(Typography)(({ theme }) => ({
  fontSize: 'clamp(1.6rem, 4vw, 2.2rem)',
  fontWeight: 800,
  color: theme.palette.primary.main,
}));

const Subtitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  marginTop: theme.spacing(1.5),
  fontSize: '1rem',
  lineHeight: 1.7,
}));

const Grid = styled('div')({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
  gap: 16,
});

const Tile = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  aspectRatio: '4/3',
  borderRadius: 12,
  overflow: 'hidden',
  background: alpha(theme.palette.primary.main, 0.08),
  boxShadow: `0 2px 12px ${alpha(theme.palette.primary.main, 0.12)}`,
  transition: theme.transitions.create(['transform', 'box-shadow']),
  '&:hover, &:focus-visible': {
    transform: 'scale(1.03)',
    boxShadow: `0 8px 28px ${alpha(theme.palette.primary.main, 0.28)}`,
  },
}));

const TileOverlay = styled('div')(({ theme }) => ({
  position: 'absolute',
  inset: 0,
  background: `linear-gradient(to top, ${alpha(theme.palette.primary.dark, 0.65)} 0%, transparent 55%)`,
  display: 'flex',
  alignItems: 'flex-end',
  padding: theme.spacing(1.5, 1.75),
}));

const TileCaption = styled(Typography)({
  color: '#fff',
  fontWeight: 600,
  fontSize: '0.85rem',
});

const LightboxBackdrop = styled('div')({
  position: 'fixed',
  inset: 0,
  background: 'rgba(0,0,0,.88)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const LightboxFrame = styled('div')({
  position: 'relative',
  maxWidth: 'min(90vw, 900px)',
  maxHeight: '85vh',
  width: '100%',
  aspectRatio: '4/3',
  borderRadius: 12,
  overflow: 'hidden',
});

const FloatingIconButton = styled(IconButton)({
  position: 'fixed',
  background: 'rgba(255,255,255,.15)',
  color: '#fff',
  '&:hover': {
    background: 'rgba(255,255,255,.28)',
  },
});

const CloseButton = styled(FloatingIconButton)({
  top: 20,
  left: 20,
});

const PrevButton = styled(FloatingIconButton)({
  right: 16,
  top: '50%',
  transform: 'translateY(-50%)',
});

const NextButton = styled(FloatingIconButton)({
  left: 16,
  top: '50%',
  transform: 'translateY(-50%)',
});

const Counter = styled(Typography)({
  position: 'fixed',
  bottom: 24,
  left: '50%',
  transform: 'translateX(-50%)',
  color: '#fff',
  background: 'rgba(0,0,0,.4)',
  padding: '4px 14px',
  borderRadius: 20,
});

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
      if (e.key === 'ArrowLeft') next();
      if (e.key === 'ArrowRight') prev();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [activeIndex, next, prev]);

  return (
    <Section aria-labelledby="gallery-title">
      <Inner>
        <Header>
          <Eyebrow>معرض الصور</Eyebrow>
          <Heading variant="h2" id="gallery-title">أعمالنا في الصباغة والدهانات</Heading>
          <Subtitle>نماذج من أعمال الصباغة والدهانات التي نفّذناها في مختلف مناطق الكويت</Subtitle>
        </Header>

        <Grid>
          {images.map((img, index) => (
            <Tile
              key={img.src}
              focusRipple
              onClick={() => setActiveIndex(index)}
              aria-label={`عرض صورة: ${img.alt}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
                style={{ objectFit: 'cover' }}
                loading="lazy"
              />
              <TileOverlay>
                <TileCaption>{img.alt}</TileCaption>
              </TileOverlay>
            </Tile>
          ))}
        </Grid>
      </Inner>

      <Modal
        open={activeIndex !== null}
        onClose={close}
        closeAfterTransition
        hideBackdrop
        aria-label="عرض الصورة"
      >
        <Fade in={activeIndex !== null}>
          <LightboxBackdrop onClick={close}>
            {activeIndex !== null && (
              <>
                <LightboxFrame onClick={(e) => e.stopPropagation()}>
                  <Image
                    src={images[activeIndex].src}
                    alt={images[activeIndex].alt}
                    fill
                    sizes="90vw"
                    style={{ objectFit: 'contain' }}
                    priority
                  />
                </LightboxFrame>

                <CloseButton onClick={close} aria-label="إغلاق">
                  <CloseIcon />
                </CloseButton>

                <PrevButton
                  onClick={(e) => { e.stopPropagation(); prev(); }}
                  aria-label="الصورة السابقة"
                >
                  <ChevronRightIcon fontSize="large" />
                </PrevButton>

                <NextButton
                  onClick={(e) => { e.stopPropagation(); next(); }}
                  aria-label="الصورة التالية"
                >
                  <ChevronLeftIcon fontSize="large" />
                </NextButton>

                <Counter>{activeIndex + 1} / {images.length}</Counter>
              </>
            )}
          </LightboxBackdrop>
        </Fade>
      </Modal>
    </Section>
  );
}
