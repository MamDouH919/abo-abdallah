"use client";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

// Paint brands commonly sold in Kuwait and the finishes we use them for. Only
// product facts (brand + product line + where it suits) — no supplier or
// partnership claims.
const BRANDS = [
  {
    name: "جوتن (Jotun)",
    desc: "من أكثر الدهانات انتشاراً في الكويت. نستخدم خطوط الدهان الداخلي القابلة للغسيل للغرف والصالات، ودهانات جوتاشيلد الخارجية للواجهات المعرضة للشمس والغبار.",
  },
  {
    name: "ناشيونال (National Paints)",
    desc: "خيار متوازن بين السعر والجودة، مناسب لدهان الشقق والمنازل بالكامل، ويتوفر بتشكيلة واسعة من الألوان المطفية ونصف اللامعة.",
  },
  {
    name: "الجزيرة (Al-Jazeera)",
    desc: "دهانات داخلية وخارجية بأسعار مناسبة، نستخدمها كثيراً في الخدمة الاقتصادية وتجهيز الشقق للتأجير دون التضحية بالتغطية الجيدة.",
  },
  {
    name: "هيمبل (Hempel)",
    desc: "دهانات خارجية وعازلة قوية، مناسبة للواجهات والأسوار والأسطح المعدنية، خاصة في المناطق القريبة من البحر.",
  },
  {
    name: "سايبس (Sipes)",
    desc: "دهانات بلاستيكية ومعاجين معروفة في سوق الكويت، نستخدمها في المعجون والتأسيس والطبقات الداخلية.",
  },
  {
    name: "دهانات ديكورية",
    desc: "الإيطالي المعتق والمخمل والمعدني وتأثيرات الإسمنت والرخام لجدار المجلس أو التلفزيون، مع عينة على الجدار قبل التنفيذ.",
  },
];

const FINISHES = [
  { name: "مطفي", use: "الأسقف وغرف النوم — يخفي العيوب الصغيرة ولا يعكس الضوء." },
  { name: "نصف مطفي / ساتان", use: "الصالات والممرات وغرف الأطفال — يُمسح بسهولة ويتحمل الاستخدام." },
  { name: "نصف لامع", use: "المطابخ والحمامات — مقاوم للرطوبة والبخار وسهل التنظيف." },
  { name: "زيتي / لاكيه", use: "الأبواب الخشبية والحديد — لمعة قوية وحماية من الاحتكاك." },
  { name: "أكريليك خارجي", use: "الواجهات والأسوار — يتحمل حرارة الكويت والأشعة والغبار." },
];

const CLIMATE = [
  "حرارة الصيف في الكويت تتجاوز الخمسين درجة، والشمس المباشرة على الواجهات والأسوار تجعل الدهان الخارجي العادي يبهت ويتطبشر خلال موسم أو اثنين. لهذا نستخدم في الخارج دهانات أكريليك مقاومة للأشعة فوق البنفسجية، ونفضّل الألوان الفاتحة التي تعكس الحرارة وتخفي الغبار، وننفذ الدهان الخارجي في ساعات الصباح الباكر أو في الأشهر المعتدلة حتى لا يجف الدهان بسرعة ويترك آثار الرولة.",
  "في المناطق الساحلية مثل السالمية والشعب والصليبيخات تحمل الرياح رطوبة وأملاحاً تترسب على الجدران وتمنع التصاق الدهان، فنبدأ بغسل الواجهة ومعالجتها بمادة عازلة قبل الدهان. وفي الداخل، الحمامات والمطابخ التي يعمل فيها المكيف والبخار طوال اليوم تحتاج دهاناً نصف لامع مضاداً للفطريات، أما الغبار الذي يدخل البيوت مع العواصف فيجعل الدهان القابل للمسح خياراً أذكى في الصالات والممرات وغرف الأطفال.",
  "قاعدة بسيطة نتبعها في كل بيت: الدهان الأغلى ليس بالضرورة الأنسب. نختار لكل مساحة ما يناسب استخدامها وتعرضها للشمس والرطوبة، ونوضح لك السبب في عرض السعر حتى تعرف أين تذهب كل دينار.",
];

const Wrapper = styled("section")(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: theme.palette.background.paper,
}));

const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  textAlign: "center",
  fontWeight: 800,
  fontSize: "2rem",
  marginBottom: theme.spacing(2),
}));

const Card = styled("article")(({ theme }) => ({
  height: "100%",
  padding: theme.spacing(3),
  borderRadius: theme.shape.borderRadius * 2,
  border: `1px solid ${theme.palette.grey[200]}`,
  backgroundColor: theme.palette.background.default,
}));

export default function PaintTypes() {
  return (
    <Wrapper id="paint-types" aria-labelledby="paint-types-title">
      <Container maxWidth="lg">
        <Title variant="h2" id="paint-types-title">
          أنواع الدهانات التي نستخدمها في الكويت
        </Title>
        <Typography color="text.secondary" textAlign="center" maxWidth={720} mx="auto" mb={5}>
          اختيار الدهان المناسب لكل مساحة أهم من اختيار أغلى دهان. نستخدم دهانات أصلية من شركات معروفة في السوق
          الكويتي، ونقترح عليك النوع ودرجة اللمعان حسب استخدام الغرفة وحالة الجدار وميزانيتك.
        </Typography>
        <Grid container spacing={3} mb={6}>
          {BRANDS.map((b) => (
            <Grid key={b.name} size={{ xs: 12, sm: 6, md: 4 }}>
              <Card>
                <Typography component="h3" variant="h6" fontWeight={700} gutterBottom>
                  {b.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" lineHeight={1.9}>
                  {b.desc}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Typography component="h3" variant="h5" fontWeight={800} color="primary" textAlign="center" mb={3}>
          درجات اللمعان وأين نستخدم كل منها
        </Typography>
        <Grid container spacing={2}>
          {FINISHES.map((f) => (
            <Grid key={f.name} size={{ xs: 12, md: 6 }}>
              <Typography color="text.secondary" lineHeight={1.9}>
                <strong>{f.name}:</strong> {f.use}
              </Typography>
            </Grid>
          ))}
        </Grid>
        <Typography component="h3" variant="h5" fontWeight={800} color="primary" textAlign="center" mt={6} mb={3}>
          الدهان المناسب لمناخ الكويت
        </Typography>
        {CLIMATE.map((p) => (
          <Typography key={p.slice(0, 24)} color="text.secondary" lineHeight={1.95} mb={2}>
            {p}
          </Typography>
        ))}
      </Container>
    </Wrapper>
  );
}
