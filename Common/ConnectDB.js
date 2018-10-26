'use strict'
const conn = require('../Config/ConfigDB.js');

/**
 * Dùng để load data (get)
 */
exports.load = (sql) => {
	return new Promise((resolve, reject) => {
		conn.getConnection(function (err, connection) {
			if (err) {
				reject(err)
			} else {
				connection.query(sql, function (error, rows, fields) {
					connection.release();

					if (error) {
						reject(error);
					} else {
						resolve(rows);
					}

				});
			}
		});
	});
}

/**
 * Dùng để lưu lại data (update, delete)
 */
exports.save = sql => {
	return new Promise((resolve, reject) => {
		conn.getConnection(function (err, connection) {
			if (err) {
				reject(err)
			} else {

				console.log('establish connection');

				connection.query(sql, function (error, value) {

					connection.release();

					console.log('release connection');
					if (error) {
						reject(error)
					} else {
						resolve(value);
					}
				});
			}
		});
	});
}