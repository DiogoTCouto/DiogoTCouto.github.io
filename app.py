from flask import Flask, render_template

app = Flask(__name__)

@app.route('/profile')
def profile():
    user = {
        'name': 'Vasco Daniel',
        'email': 'vdaniel@exemplo.com',
        'joined_date': '24-09-2024',
        'bio': 'Just a regular John Doe who loves coding and parking management systems.',
        'profile_picture': 'https://via.placeholder.com/100'
    }
    return render_template('profile.html', user=user)

if __name__ == '__main__':
    app.run(debug=True)