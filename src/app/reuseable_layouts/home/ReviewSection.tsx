"use client"

import BABox from "@/app/components/BABox";
import BAHeading from "@/app/components/BAHeading";
import BAPera from "@/app/components/BAPera";
import { StarFilled, UserOutlined } from "@ant-design/icons";
import { Carousel } from 'antd';
import { useEffect, useState } from "react";

const contentStyle: React.CSSProperties = {
    color: '#fff',
    background: '#264653',
    height: '100%'
};

export default function ReviewSection() {

    const [loader, setLoader] = useState(false)
    const [listData, setListData] = useState<any>([])
    const ratings = [1, 2, 3, 4, 5]

    const getData = async () => {
        setLoader(true)
        const data = await fetch('https://mubashircurtainrecieptbackend.vercel.app/feedback')
        const json: any = await data.json()
        setListData([...json.data])
        setLoader(false)
    }

    useEffect(() => {
        getData()
    }, [])

    return <>
        <BABox className="p-10 md:p-20">
            <BAHeading>Customer Reviews</BAHeading>
            {loader ? <BAPera>Loading ...</BAPera> : <Carousel autoplay>
                {listData.map((x: any, i: any) => <BABox key={i} className="customRounded p-10 md:p-20" sx={contentStyle}>
                    <BABox className="flex">
                        <UserOutlined style={{ fontSize: 50 }} />
                        <BABox className="ps-2">
                            <BAPera className="text-3xl">{x.customerName}</BAPera>
                            {ratings.map((s, i) => <StarFilled key={i} style={{ fontSize: 20, color: s >= x.starRating ? 'grey' : "orange" }} />)}
                        </BABox>
                    </BABox>
                    <BABox className="py-3">
                        <BAPera className="text-2xl">{x.comments}</BAPera>
                    </BABox>
                </BABox>)}
            </Carousel>}
        </BABox>
    </>
}