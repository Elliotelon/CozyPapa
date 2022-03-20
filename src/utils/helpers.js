export const formatPrice = (number) => {
    return new Intl.NumberFormat('ko-KR', {
        style:'currency',
        currency:'KRW'
    }).format(number)
}

export const getUniqueValues = (data, type) => {
    let unique = data.map((item) => item[type])
    if(type === "colors") {
        unique = unique.flat()
    }
    return ["all", ...new Set(unique)]
}
