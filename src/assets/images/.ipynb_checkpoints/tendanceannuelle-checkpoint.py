import pandas as pd
import statsmodels.formula.api as smf
import matplotlib.pyplot as plt


stations = pd.read_csv("data/postesSynop.csv", sep=";")
metropole = stations.ID[(stations.Latitude > 40) & (stations.Longitude > -10)]

class TendanceAnnuelle:
    def __init__(self, t, title):
        self.t = t
        self.title = title
        self.celsius = 'Température (°C)'
    
    def degrés_celcius(self):
    # Convertir temperature kelvin en Celsius
        self.t['t'] = self.t['t'] - 273.15
        self.celsius = 'Température (°C)'

    def évolution(self):
        t = self.t.copy()
        t['année'] = t.date.apply(lambda x: x.year)
        t = t[t.numer_sta.isin(metropole) & (t.année <= 2022)]
        self.moy = t.groupby('année')['t'].mean().reset_index()
        plt.plot(self.moy.année, self.moy.t, label='Moyenne annuelle')

    def tendance(self, depuis=1996, jusqua=2022):
        self.depuis=depuis
        self.jusqua=jusqua
        selection = self.moy[(self.moy.année >= self.depuis) & (self.moy.année <= self.jusqua)]
        lin = smf.ols('t ~ année', data=selection).fit()
        tendance = 'Tendance %d-%d : %.2f °C/décade' % (
            depuis, jusqua, 10*lin.params.année)
        plt.plot(selection.année, lin.fittedvalues, label=tendance)

    def sauve(self, filename):
        plt.title(self.title)
        plt.xlabel('Année')
        plt.ylabel(self.celsius)
        plt.legend()
        plt.savefig(filename)

