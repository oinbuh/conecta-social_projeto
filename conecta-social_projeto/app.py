from flask import Flask, render_template

app = Flask(__name__)

SPORT_PAGES = [
    'futebol', 'basquete', 'tenis', 'badminton', 'volei', 'rugby', 'futevolei',
    'handebol', 'futsal', 'volei_de_areia', 'tenis_de_mesa', 'boxe', 'muay_thai',
    'judo', 'jiu_jitsu', 'karate', 'kung_fu', 'taekwondo', 'mma',
    'futebol_americano', 'natacao', 'corrida', 'skate', 'patinacao', 'surfe',
    'polo_aquatico', 'ciclismo', 'kitesurf', 'mergulho', 'cricket', 'beisebol',
]


@app.route('/')
def index():
    return render_template('index.html', page='index')


def register_sport_page(page_name):
    """Register a simple route that renders the matching sports template."""

    def view():
        return render_template(f'{page_name}.html', page=page_name)

    view.__name__ = page_name
    app.add_url_rule(f'/{page_name}', endpoint=page_name, view_func=view)


for sport_page in SPORT_PAGES:
    register_sport_page(sport_page)


if __name__ == '__main__':
    app.run(debug=True)
