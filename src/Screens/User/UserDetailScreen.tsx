import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Dimensions, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import EditIcon from 'react-native-vector-icons/Feather';
import { ScreenHeight, ScreenWidth } from '../../Utils/Constant';

const UserProfileScreen = () => {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    address: '123 Main St, Springfield, USA',
    avatar: 'https://via.placeholder.com/150',
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    setIsEditing(false);
    Alert.alert('Profile Updated', 'Your profile has been updated successfully.');
  };

  const handleLogout = () => {
    Alert.alert('Logged Out', 'You have been logged out.');
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <View style={{paddingVertical:'10%'}}>
        <EditIcon style={{alignSelf:'flex-end'}} name="edit" size={20} color="blue" />
        <Icon name="user" size={100} color="#aaa" />
        </View>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={user.name}
          editable={isEditing}
          onChangeText={(text) => setUser({ ...user, name: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={user.email}
          editable={isEditing}
          onChangeText={(text) => setUser({ ...user, email: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Address"
          value={user.address}
          editable={isEditing}
          onChangeText={(text) => setUser({ ...user, address: text })}
        />


        <TouchableOpacity onPress={() => (isEditing ? handleSave() : setIsEditing(true))} style={styles.saveButton}>
          <Text style={styles.saveButtonText}>{isEditing ? 'Save' : 'Edit'}</Text>
        </TouchableOpacity>


        <View style={styles.orderHistoryContainer}>
          <Text style={styles.sectionTitle}>Order History</Text>

          <Text style={styles.orderText}>Order #1 - $25.00</Text>
          <Text style={styles.orderText}>Order #2 - $40.00</Text>
        </View>


        <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    justifyContent: 'center',
    padding: ScreenWidth * 0.05, 
  },
  profileContainer: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: ScreenWidth * 0.05,
  },
  avatar: {
    width: ScreenWidth * 0.3, 
    height: ScreenWidth * 0.3, 
    borderRadius: ScreenWidth * 0.15, 
    marginBottom: ScreenHeight * 0.02,
  },
  editAvatarButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginTop: -ScreenWidth * 0.05, 
  },
  editAvatarText: {
    color: '#fff',
    fontSize: ScreenWidth * 0.04, 
  },
  input: {
    width: '100%',
    height: ScreenHeight * 0.06,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: ScreenHeight * 0.02,
    paddingHorizontal: ScreenWidth * 0.04,
    fontSize: ScreenWidth * 0.04, 
  },
  saveButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 12,
    paddingHorizontal: ScreenWidth * 0.3, 
    borderRadius: 25,
    marginTop: ScreenHeight * 0.03, 
  },
  saveButtonText: {
    color: '#fff',
    fontSize: ScreenWidth * 0.05, 
    fontWeight: 'bold',
  },
  orderHistoryContainer: {
    width: '100%',
    marginTop: ScreenHeight * 0.05, 
  },
  sectionTitle: {
    fontSize: ScreenWidth * 0.05, 
    fontWeight: 'bold',
    color: '#333',
    marginBottom: ScreenHeight * 0.02, 
  },
  orderText: {
    fontSize: ScreenWidth * 0.04, 
    color: '#555',
    marginBottom: ScreenHeight * 0.015, 
  },
  logoutButton: {
    backgroundColor: '#FF4040',
    paddingVertical: 12,
    paddingHorizontal: ScreenWidth * 0.3, 
    borderRadius: 25,
    marginTop: ScreenHeight * 0.05, 
  },
  logoutText: {
    color: '#fff',
    fontSize: ScreenWidth * 0.05, 
    fontWeight: 'bold',
  },
});

export default UserProfileScreen;
