import React, { useState } from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    TextField,
    Rating,
    Box,
    Typography,
    Stack,
    Alert,
    CircularProgress,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { supabase } from '@/supabaseClient';

const StyledDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialog-paper': {
        borderRadius: theme.spacing(2),
        minWidth: 400,
        [theme.breakpoints.down('sm')]: {
            margin: theme.spacing(2),
            minWidth: 'auto',
        },
    },
}));

const RatingContainer = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
    gap: 16,
    padding: '8px 0',
}));

interface TestimonialDialogProps {
    open: boolean;
    onClose: () => void;
    onSuccess?: () => void;
}

interface FormData {
    name: string;
    comment: string;
    rate: number | null;
}

const TestimonialDialog: React.FC<TestimonialDialogProps> = ({
    open,
    onClose,
    onSuccess,
}) => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        comment: '',
        rate: 5,
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);

    const handleInputChange = (field: keyof FormData, value: string | number | null) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        setError(null);
    };

    const validateForm = (): boolean => {
        if (!formData.name.trim()) {
            setError('الاسم مطلوب');
            return false;
        }
        if (formData.name.trim().length < 2) {
            setError('الاسم يجب أن يكون على الأقل حرفين');
            return false;
        }
        if (!formData.comment.trim()) {
            setError('التعليق مطلوب');
            return false;
        }
        if (formData.comment.trim().length < 10) {
            setError('التعليق يجب أن يكون على الأقل 10 أحرف');
            return false;
        }
        if (!formData.rate || formData.rate < 1) {
            setError('التقييم مطلوب');
            return false;
        }
        return true;
    };

    const handleSubmit = async () => {
        if (!validateForm()) return;

        setLoading(true);
        setError(null);

        try {
            const { error } = await supabase
                .from('testimonials_abo_farha')
                .insert([
                    {
                        name: formData.name.trim(),
                        comment: formData.comment.trim(),
                        rate: formData.rate,
                        role: "user",
                    },
                ])
                .select();

            if (error) {
                console.error('Error submitting testimonial:', error);
                setError('حدث خطأ أثناء إرسال التعليق. يرجى المحاولة مرة أخرى.');
                return;
            }

            setSuccess(true);
            setTimeout(() => {
                handleClose();
                onSuccess?.();
            }, 1500);
        } catch (err) {
            console.error('Unexpected error:', err);
            setError('حدث خطأ غير متوقع. يرجى المحاولة مرة أخرى.');
        } finally {
            setLoading(false);
        }
    };

    const handleClose = () => {
        setFormData({ name: '', comment: '', rate: 5 });
        setError(null);
        setSuccess(false);
        setLoading(false);
        onClose();
    };

    return (
        <StyledDialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
            <DialogTitle sx={{ textAlign: 'center', pb: 1 }}>
                <Typography variant="h5" fontWeight="bold" color="primary">
                    إضافة رأي جديد
                </Typography>
                <Typography variant="body2" color="text.secondary" mt={1}>
                    شاركنا تجربتك مع خدماتنا
                </Typography>
            </DialogTitle>

            <DialogContent sx={{ pt: 2 }}>
                <Stack spacing={3} pt={1}>
                    {error && (
                        <Alert severity="error" sx={{ mb: 2 }}>
                            {error}
                        </Alert>
                    )}

                    {success && (
                        <Alert severity="success" sx={{ mb: 2 }}>
                            تم إرسال تعليقك بنجاح! سيتم مراجعته قريباً.
                        </Alert>
                    )}

                    <TextField
                        label="الاسم"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        fullWidth
                        required
                        placeholder="اكتب اسمك الكامل"
                        disabled={loading || success}
                        error={!!error && !formData.name.trim()}
                    />

                    <TextField
                        label="التعليق"
                        value={formData.comment}
                        onChange={(e) => handleInputChange('comment', e.target.value)}
                        fullWidth
                        required
                        multiline
                        rows={4}
                        placeholder="اكتب تعليقك هنا..."
                        disabled={loading || success}
                        error={!!error && !formData.comment.trim()}
                    />

                    <RatingContainer>
                        <Typography variant="body1" fontWeight="medium">
                            التقييم:
                        </Typography>
                        <Rating
                            value={formData.rate}
                            onChange={(_, newValue) => handleInputChange('rate', newValue)}
                            precision={0.5}
                            size="large"
                            disabled={loading || success}
                        />
                        <Typography variant="body2" color="text.secondary">
                            ({formData.rate}/5)
                        </Typography>
                    </RatingContainer>
                </Stack>
            </DialogContent>

            <DialogActions sx={{ p: 3, pt: 1 }}>
                <Button
                    onClick={handleClose}
                    disabled={loading}
                    color="inherit"
                    size="large"
                >
                    إلغاء
                </Button>
                <Button
                    onClick={handleSubmit}
                    disabled={loading || success}
                    variant="contained"
                    size="large"
                    startIcon={loading ? <CircularProgress size={20} /> : null}
                >
                    {loading ? 'جاري الإرسال...' : 'إرسال التعليق'}
                </Button>
            </DialogActions>
        </StyledDialog>
    );
};

export default TestimonialDialog;