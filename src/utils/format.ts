import { Product, Keyword } from "@/structure/types"

export function unwrapQuery(val: string | (string | null)[]): string {
    if (val == null) return ""

    return val as string
}

export function formatNumber(val: number): string {
    return String(val).replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

export function cutName(val: string, len: number): string {
    if (val.length >= len) return val.substring(0, len) + "..."
    return val
}

export function priceType(val: Product): string {
    if (!val.price) {
        return "알 수 없음"
    }

    var priceComma = String(val.price).replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return priceComma
}

export function getRelativeTime(val: number | undefined): string {
    if (!val) return ""

    var today = new Date();
    var timeValue = new Date(val * 1000);

    var betweenTime = Math.floor((today.getTime() - timeValue.getTime()) / 1000 / 60);

    if (betweenTime < 1) {
        return '방금 전';
    } else if (betweenTime < 60) {
        return betweenTime + '분 전'
    }

    var betweenTimeHour = Math.floor(betweenTime / 60);
    
    if (betweenTimeHour < 24) {
        return betweenTimeHour + '시간 전'
    }

    var betweenTimeDay = Math.floor(betweenTime / 60 / 24);
    
    if (betweenTimeDay < 365) {
        return betweenTimeDay + '일 전'
    }

    return Math.floor(betweenTimeDay / 365) + '년 전'
}