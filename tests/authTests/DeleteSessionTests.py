import json
from unittest import main
import requests

from TestConfiguration import TestConfiguration

class DeleteSessionTests(TestConfiguration):

   def setUp(self):      
      registerUrl = self.baseUrl + '/users'
      registerBody = {
         'firstName' : 'Dave',
         'lastName' : 'Janzen',
         'email' : 'dave.janzen18@gmail.com',
         'password' : 'Stockd2g'
      }
      registerResponse = requests.post(url=registerUrl, data=json.dumps(registerBody), headers=self.headers)
      self.assertEqual(registerResponse.status_code, 200)
      self.assertEqual(self.getJson(registerResponse), None)

      loginUrl = self.baseUrl + '/users/session'
      loginBody = {
         'email' : 'dave.janzen18@gmail.com',
         'password' : 'Stockd2g'
      }
      loginResponse = requests.post(url=loginUrl, data=json.dumps(loginBody), headers=self.headers)
      loginResponseData = self.getJson(loginResponse)
      self.assertEqual(loginResponse.status_code, 200)
      self.assertIsNotNone(loginResponseData['userId'])
      self.assertIsNotNone(loginResponseData['token'])
      
      self.userId = loginResponseData['userId']
      self.token = loginResponseData['token']
      self.url = self.baseUrl + '/users/' + str(self.userId) + '/session'
      self.headers['Authorization'] = 'token ' + self.token


   def test_logout_user(self):
      response = requests.delete(url=self.url, headers=self.headers)     
   
      self.assertEqual(self.getJson(response), None)
      self.assertEqual(response.status_code, 200)


   def test_logout_userTwice(self):
      requests.delete(url=self.url, headers=self.headers)
      response = requests.delete(url=self.url, headers=self.headers)
      
      self.assertEqual(response.status_code, 401)

   
   def test_logout_wrongUser(self):
      url = self.baseUrl + '/users/' + str(self.userId + 30) + '/session'
      response = requests.delete(url=url, headers=self.headers)
      
      self.assertEqual(response.status_code, 403)
      

   def tearDown(self):
      self.cursor.execute("DELETE FROM User")
      self.cursor.execute("ALTER TABLE User AUTO_INCREMENT=1")