import React, { useState } from 'react';
import { Button } from 'antd';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';
import axios from "axios";

interface FavoriteButtonProps {
    idx: string;    
}

const FavoriteButton = ( {idx} : FavoriteButtonProps) => {
    const [isLiked, setIsLiked] = useState(false);

    const postWish = async() => {
        let config = {
            method: "POST",
            url: `https://api-dev.weconnect.support/volunteer/${idx}/wishlist`,
            headers: {
                Authorization: localStorage.getItem("jwt-token"),
            },
        };
        const res = await axios(config);
        console.log(res);
    };

    const deleteWish = async() => {
        let config = {
            method: "POST",
            url: `https://api-dev.weconnect.support/volunteer/${idx}/wishlist`,
            headers: {
                Authorization: localStorage.getItem("jwt-token"),
            },
        };
        const res = await axios(config);
        console.log(res);
    };

    const handleClick = () => {
        if(isLiked){
            deleteWish();
        }
        else{postWish();}
        setIsLiked(!isLiked);    
    }

    return (
        <Button type="text" icon={isLiked ? <HeartFilled /> : <HeartOutlined />} onClick={handleClick}>
            {isLiked ? '좋아요 취소' : '좋아요'}
        </Button>
    );
};

export default FavoriteButton;