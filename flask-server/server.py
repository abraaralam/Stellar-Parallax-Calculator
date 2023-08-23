from flask import Flask, request, jsonify
from astroquery.simbad import Simbad
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


def get_parallax_by_common_name(common_name):
    custom_simbad = Simbad()
    custom_simbad.add_votable_fields('parallax')

    result_table = custom_simbad.query_object(common_name)

    if result_table is not None:
        # Parallax value in milliarcseconds
        parallax = result_table['PLX_VALUE'][0]
        return parallax
    else:
        return None


@app.route('/api/get-parallax', methods=['POST'])
def get_parallax():
    data = request.get_json()
    stellar_object_name = data.get('stellar_object_name')
    print(stellar_object_name)

    parallax = get_parallax_by_common_name(stellar_object_name)

    if parallax is not None:
        print(parallax)
        response_data = {'parallax': parallax}
    else:
        response_data = {'error': 'Stellar object not found'}

    return jsonify(response_data)


if __name__ == '__main__':
    app.run(debug=True)
