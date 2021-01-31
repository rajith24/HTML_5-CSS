import psutil
import platform
from datetime import datetime

import time

import numpy as np
import matplotlib.pyplot as plt
import matplotlib.animation as animation
from matplotlib import style

import xlsxwriter


workbook = xlsxwriter.Workbook('hello.xlsx') 
worksheet = workbook.add_worksheet() 

style.use('fivethirtyeight')

fig = plt.figure()
ax1 = fig.add_subplot(1,1,1)
xs = []
ys = []
bold = workbook.add_format({'bold': True})

worksheet.write('A1', 'Items',bold) 
worksheet.write('B1', 'CPU', bold) 
worksheet.write('C1', 'x',bold) 
worksheet.write('D1', 'y', bold) 

# for i, percentage in enumerate(psutil.cpu_percent(percpu=True, interval=1)):
#     print(f"Core {i}: {percentage}%")
# print(f"Total CPU Usage: {psutil.cpu_percent()}%")
count=0
row=1
column=1
start_time = time.time()
def animate(i):
    global count
    global row
    global column
    for j, percentage in enumerate(psutil.cpu_percent(percpu=True)):
        print(f"Core {j}: {percentage}%")
        if j == 0:
            x, y = (count,percentage)
            count+=1
            print('Percent:', percentage)
            xs.append(float(x))
            ys.append(float(y))
            print('hi')
            worksheet.write(row, 0, count)
            worksheet.write(row, 1, j)
            worksheet.write(row, 2, x)
            worksheet.write(row, 3, y)
            row+=1
    ax1.clear() 
    ax1.set_ylim((0,100))
    ax1.plot(xs, ys)

    if time.time()-start_time > 30:
        print('hi count')
        del xs[0]
        del ys[0]
    if count>100:
        workbook.close()
        print('Data Collected')
    

ani = animation.FuncAnimation(fig, animate, interval=1000)
plt.show()
 


