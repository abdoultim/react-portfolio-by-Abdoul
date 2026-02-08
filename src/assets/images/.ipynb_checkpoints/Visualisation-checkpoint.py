import requests
import pandas as pd
import plotly.graph_objects as go
import os

class DataVisualizer:
    @staticmethod
    def plot_fuel_prices(df, save_path=None):
        # Création de la figure avec Plotly
        fig = go.Figure()

        # Boucle sur tous les types de carburant (à l'exception de la variable 'Mois')
        for fuel_type in df.columns[1:]:
            # Ajout de chaque ligne de données à la figure
            fig.add_trace(go.Scatter(x=df['Mois'], y=df[fuel_type], mode='lines+markers', name=fuel_type))

        # Configuration de la mise en page du graphique
        fig.update_layout(
            title='Prix du carburant en France (Janvier 2014 - Avril 2024)',
            xaxis_title='Mois et année',
            yaxis_title='Prix du carburant (en €)',
            xaxis=dict(tickangle=-45, tickmode='linear'),  # Rotation des étiquettes de l'axe des abscisses
            legend=dict(orientation='h', yanchor='bottom', y=1.02, xanchor='right', x=1),
            margin=dict(l=50, r=50, t=50, b=50),  # Marge pour éviter la superposition de titres
            width=1200,  # Largeur du graphique en pixels
            height=800   # Hauteur du graphique en pixels
        )

        # Affichage du graphique
        fig.show()

        # Sauvegarde du graphique dans un fichier image
        if save_path:
            if not os.path.exists(save_path):
                os.makedirs(save_path)
            fig.write_image(os.path.join(save_path, 'graphique_carburant.png'))