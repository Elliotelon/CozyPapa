import React from 'react'
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi'
export const links = [
  {
    id: 1,
    text: '홈',
    url: '/',
  },
  {
    id: 2,
    text: '소개',
    url: '/about',
  },
  {
    id: 3,
    text: '상품',
    url: '/products',
  },
]

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: '목적',
    text:
      '개인의 취향에 맞는 가구 제작',
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: '비전',
    text:
      '맞춤 제작 전문 가구점으로 확장할 예정',
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: '특징',
    text:
      '전문 가구 장인들을 많이 섭외중',
  },
]

export const products_url = 'https://course-api.com/react-store-products'

export const single_product_url = `https://course-api.com/react-store-single-product?id=`
