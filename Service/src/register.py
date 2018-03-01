from flask import Blueprint, abort, request, Response
from util import logger
from werkzeug.exceptions import *
from werkzeug.security import generate_password_hash, check_password_hash
import pymysql
import dbConn

log = logger.Logger(True, True, True)

register_api = Blueprint('register_api', __name__)

@register_api.route('/api/register', methods=['POST'])
def post_user():
   body = request.get_json()
   passHash = generate_password_hash(body['password'])
   try:
      conn = dbConn.getDBConn()
      cursor = conn.cursor()
   except Exception as e:
      return Response('Failed to make connection to database', status=500)

   cursor.execute("INSERT INTO User(firstName, lastName, email, password) VALUES (%s, %s, %s, %s)",
      (body['firstName'], body['lastName'], body['email'], passHash));
   conn.commit();

   return Response(status=200)