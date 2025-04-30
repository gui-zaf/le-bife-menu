import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { screenStyles } from '../styles/screenStyles';
import { useCart } from '../contexts/CartContext';

const CartScreen = () => {
  const { items, removeFromCart, updateQuantity, getTotal } = useCart();
  const hasItems = items.length > 0;

  const formatPrice = (price: number) => {
    return `R$ ${price.toFixed(2).replace('.', ',')}`;
  };

  return (
    <View style={screenStyles.container}>
      <ScrollView style={screenStyles.cartScrollView}>
        <View style={screenStyles.foodDetailContent}>
          <Text style={screenStyles.foodDetailName}>Carrinho</Text>
          {!hasItems ? (
            <View style={screenStyles.emptyCartContainer}>
              <Ionicons 
                name="cart-outline" 
                size={120} 
                color="#DA2727" 
                style={screenStyles.emptyCartIcon}
              />
              <Text style={screenStyles.emptyCartText}>Seu carrinho está vazio</Text>
              <View style={screenStyles.cartInstructionContainer}>
                <Text style={screenStyles.cartInstructionText}>
                  Clique em 
                </Text>
                <Ionicons name="add-circle-outline" size={16} color="#666" />
                <Text style={screenStyles.cartInstructionText}>
                  para adicionar o produto ao carrinho
                </Text>
              </View>
            </View>
          ) : (
            <View style={screenStyles.cartItemsContainer}>
              {items.map((item) => (
                <View key={item.id} style={screenStyles.cartItem}>
                  <Image source={item.image} style={screenStyles.cartItemImage} />
                  <View style={screenStyles.cartItemDetails}>
                    <Text style={screenStyles.cartItemName}>{item.name}</Text>
                    <Text style={screenStyles.cartItemPrice}>{item.price}</Text>
                    <View style={screenStyles.quantityContainer}>
                      <TouchableOpacity
                        onPress={() => updateQuantity(item.id, item.quantity - 1)}
                        style={screenStyles.quantityButton}
                      >
                        <Ionicons name="remove-circle-outline" size={24} color="#DA2727" />
                      </TouchableOpacity>
                      <Text style={screenStyles.quantityText}>{item.quantity}</Text>
                      <TouchableOpacity
                        onPress={() => updateQuantity(item.id, item.quantity + 1)}
                        style={screenStyles.quantityButton}
                      >
                        <Ionicons name="add-circle-outline" size={24} color="#DA2727" />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <TouchableOpacity
                    onPress={() => removeFromCart(item.id)}
                    style={screenStyles.removeButton}
                  >
                    <Ionicons name="trash-outline" size={24} color="#DA2727" />
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          )}
        </View>
      </ScrollView>
      
      {hasItems && (
        <View style={screenStyles.cartFooter}>
          <View style={screenStyles.totalContainer}>
            <Text style={screenStyles.totalLabel}>Total:</Text>
            <Text style={screenStyles.totalValue}>{formatPrice(getTotal())}</Text>
          </View>
          <TouchableOpacity style={screenStyles.checkoutButton}>
            <Text style={screenStyles.checkoutButtonText}>Concluir Pedido</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default CartScreen; 