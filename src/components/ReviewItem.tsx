import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { reviewItemStyles } from '../styles/reviewItemStyles';

interface ReviewItemProps {
  id: string;
  author: string;
  foodName: string;
  comment: string;
  rating: number;
  date: string;
}

const ReviewItem: React.FC<ReviewItemProps> = ({
  author,
  foodName,
  comment,
  rating,
  date,
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
    if (isDisliked) setIsDisliked(false);
  };

  const handleDislike = () => {
    setIsDisliked(!isDisliked);
    if (isLiked) setIsLiked(false);
  };

  return (
    <View style={reviewItemStyles.container}>
      <View style={reviewItemStyles.header}>
        <View style={reviewItemStyles.profileIconContainer}>
          <Ionicons name="person" size={20} color="#000" />
        </View>
        <View style={reviewItemStyles.authorInfo}>
          <Text style={reviewItemStyles.authorName}>{author}</Text>
          <Text style={reviewItemStyles.date}>{date}</Text>
        </View>
      </View>
      <View style={reviewItemStyles.ratingContainer}>
        {[...Array(5)].map((_, index) => (
          <Ionicons
            key={index}
            name={index < rating ? 'star' : 'star-outline'}
            size={16}
            color="#FFD700"
          />
        ))}
      </View>
      <Text style={reviewItemStyles.title}>"{foodName}" - {comment}</Text>
      <View style={reviewItemStyles.actions}>
        <TouchableOpacity 
          style={reviewItemStyles.actionButton}
          onPress={handleLike}
        >
          <Ionicons 
            name={isLiked ? 'thumbs-up' : 'thumbs-up-outline'} 
            size={20} 
            color={isLiked ? '#DA2727' : '#000'} 
          />
        </TouchableOpacity>
        <TouchableOpacity 
          style={reviewItemStyles.actionButton}
          onPress={handleDislike}
        >
          <Ionicons 
            name={isDisliked ? 'thumbs-down' : 'thumbs-down-outline'} 
            size={20} 
            color={isDisliked ? '#DA2727' : '#000'} 
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ReviewItem; 