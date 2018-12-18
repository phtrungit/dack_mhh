const Student = require('../models/students')
const Teacher = require('../models/teachers')

const LocalStrategy = require('passport-local').Strategy

const strategy = new LocalStrategy(
	{
		usernameField: 'username' // not necessary, DEFAULT
	},
	function(username, password, done) {
		Student.findOne({ 'username': username }, (err, userMatch) => {
			if (err) {
				return done(err)
			}
			if (!userMatch) {
                Teacher.findOne({ 'username': username }, (err, userTeacherMatch) => {
                    if (err) {
                        return done(err)
                    }
                    if (!userTeacherMatch) {

                        return done(null, false, { message: 'Incorrect username' })
                    }
                    if (password!=userTeacherMatch.password) {
                        return done(null, false, { message: 'Incorrect password' })
                    }
                    return done(null, userTeacherMatch)
                })

			}
			if (userMatch && password!=userMatch.password) {
				return done(null, false, { message: 'Incorrect password' })
			}
			return done(null, userMatch)
		})
	}
)

module.exports = strategy
