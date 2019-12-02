#Requisitos

> Criar um cubo fracionado pelos dados informados pelo usuário

| Workstation             | Default values | Unidades |
| ----------------------- | -------------- | -------- |
| Operation Time Day(OTD) | 480            | Min      |
| Daily Quantity(DQ)      | 115            | Uni      |
| Ideal Station Time(IST) | 2.4            | Min      |
| Setup                   | 20             | Min      |
| WIP                     | 410            | Uni      |
| Planned Stops(PS)       | 0.3            | Min      |
| Unplanned Stops(US)     | 0.2            | Min      |
| Speed Loss(SL)          | 0.1            | Min      |
| Quality Loss(QL)        | 0.15           | Min      |
| Scale V                 | 1              | Cm       |
| Scale H                 | 1              | Cm       |


> Definições de siglas

TDP = 8 horas (Tempo disponível de Produção) 
TE = 1 min (Tempo da Estação)
QR = 120 unidades (Quantidade Requerida)
WIP = 410 uni
PP = 1 hora (Paradas Programadas) 
SETUP = 20 min
PNP = 30 min (Paradas Não Programadas)
PQ = 20% (Perda por Qualidade)
PV = 10% (Perda por Velocidade)

TT(Task Time) = TDP/QR
STT = Shift Takt Time
UTT(Usefull Takt Time) = TT – PP – PNP 
UST(Useful Station Time) = UST = TE + PQ + PV
IST = Ideal Station Time (IST)

## comportamento do componente

para a construção do diagrama é necessário um conjunto de dados.

* Unidade de Medida

* Setup 1cm

* WIP  4.1cm

* STT 4cm
* UTT 3.25cm
* UST 1.3
* IST 1cm
