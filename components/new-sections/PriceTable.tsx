"use client";

import Link from "next/link";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

// Approximate per-m² ranges, consistent with the area and service pages
// (data/regions-content.ts, data/services-content.ts). Final price is always
// confirmed after the site visit.
const ROWS = [
  { item: "دهان داخلي بلاستيك (جدران بحالة جيدة)", price: "1.5 – 2.5 د.ك", note: "طبقتان + تأسيس" },
  { item: "دهان داخلي مع معجون كامل", price: "2.5 – 3.5 د.ك", note: "للبيوت الجديدة أو الجدران المتضررة" },
  { item: "العمالة فقط (المواد على العميل)", price: "0.8 – 1.5 د.ك", note: "حسب حالة الجدار" },
  { item: "دهان أسقف", price: "1.5 – 2.5 د.ك", note: "دهان مطفي" },
  { item: "دهان خارجي أكريليك للواجهات", price: "2 – 3.5 د.ك", note: "حسب الارتفاع" },
  { item: "دهان واجهات بحرية (مقاوم للملوحة)", price: "2.5 – 4 د.ك", note: "غسل + عزل + دهان" },
  { item: "دهانات ديكورية (إيطالي، مخمل، معدني)", price: "6 – 12 د.ك", note: "حسب النوع" },
  { item: "تركيب ورق جدران", price: "4 – 7 د.ك", note: "شامل التركيب" },
];

const Wrapper = styled("section")(({ theme }) => ({
  padding: theme.spacing(8, 0),
}));

const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  textAlign: "center",
  fontWeight: 800,
  fontSize: "2rem",
  marginBottom: theme.spacing(2),
}));

export default function PriceTable() {
  return (
    <Wrapper id="price-table" aria-labelledby="price-table-title">
      <Container maxWidth="md">
        <Title variant="h2" id="price-table-title">
          أسعار الصباغة في الكويت للمتر المربع
        </Title>
        <Typography color="text.secondary" textAlign="center" mb={4} lineHeight={1.9}>
          جدول تقريبي يساعدك على تقدير التكلفة قبل المعاينة. السعر النهائي يعتمد على حالة الجدران ونوع الدهان
          والمساحة، ونقدمه لك مكتوباً بعد المعاينة وقبل بدء العمل.
        </Typography>
        <TableContainer component={Paper} elevation={0} sx={{ border: "1px solid", borderColor: "divider", borderRadius: 2 }}>
          <Table aria-label="أسعار الصباغة للمتر المربع">
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 700 }}>نوع العمل</TableCell>
                <TableCell sx={{ fontWeight: 700 }}>السعر للمتر المربع</TableCell>
                <TableCell sx={{ fontWeight: 700 }}>ملاحظة</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {ROWS.map((r) => (
                <TableRow key={r.item}>
                  <TableCell>{r.item}</TableCell>
                  <TableCell sx={{ fontWeight: 700, color: "primary.main", whiteSpace: "nowrap" }}>{r.price}</TableCell>
                  <TableCell sx={{ color: "text.secondary" }}>{r.note}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Typography color="text.secondary" mt={3} lineHeight={1.9}>
          كمثال: غرفة متوسطة بجدران وسقف مساحتها نحو 45 م² تكلف تقريباً بين 25 و40 ديناراً شامل المواد. إذا كانت
          ميزانيتك محدودة، اطّلع على خدمة <Link href="/services/cheap-painter-kuwait">صباغ رخيص بالكويت</Link> أو
          خدمة <Link href="/services/daily-painter-kuwait">صباغ باليومية</Link>، وللتفاصيل الكاملة راجع{" "}
          <Link href="/asaar-sabagh-kuwait">دليل أسعار الصباغة 2026</Link>.
        </Typography>
      </Container>
    </Wrapper>
  );
}
