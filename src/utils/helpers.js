export const formatPrice = (number) => {
    return new Intl.NumberFormat('ko-KR', {
        style:'currency',
        currency:'KRW'
    }).format(number)
}

export const getUniqueValues = () => {}
