# importing the csv module 
import csv 
import psutil
import platform
from datetime import datetime
import time

import numpy as np
xs=[]
# my data rows as dictionary objects 
# mydict =[{'branch': 'COE', 'cgpa': '9.0', 'name': 'Nikhil', 'year': '2'}, 
# 		{'branch': 'COE', 'cgpa': '9.1', 'name': 'Sanchit', 'year': '2'}, 
# 		{'branch': 'IT', 'cgpa': '9.3', 'name': 'Aditya', 'year': '2'}, 
# 		{'branch': 'SE', 'cgpa': '9.5', 'name': 'Sagar', 'year': '1'}, 
# 		{'branch': 'MCE', 'cgpa': '7.8', 'name': 'Prateek', 'year': '3'}, 
# 		{'branch': 'EP', 'cgpa': '9.1', 'name': 'Sahil', 'year': '2'}] 
count=0
item=0
# field names 
fields = ['Items', 'CPU', 'x', 'y'] 

# name of csv file 
filename = "C:\\Program Files\\PostgreSQL\\13\\data\\data\\cpu_live.csv"
# with open(filename, 'w', newline='') as csvfile: 
#         # creating a csv dict writer object 
#         writer = csv.writer(csvfile) 
        
#         writer.writerow(fields);
start_time =time.time()
total=0
while True:
    for j, percentage in enumerate(psutil.cpu_percent(percpu=True, interval=1)):
        print(f"Core {j}: {percentage}%")
        if j == 0:
            Items, cpu, x, y = (item,j,count,percentage)
            count+=1
            item+=1
            # print('Percent:', percentage)
            xs.append([Items, cpu, x, y])
            
            # print(xs)
            # if time.time()-start_time > 30:
            #     print('hi count')
            #     del xs[0]
        elif j == 1:
            Items, cpu, x, y = (item,j,count,percentage)
            count+=1
            item+=1
            # print('Percent:', percentage)
            xs.append([Items, cpu, x, y])
            
            # print(xs)
            # if time.time()-start_time > 30:
            #     print('hi count')
            #     del xs[1]
        elif j == 2:
            Items, cpu, x, y = (item,j,count,percentage)
            count+=1
            item+=1
            # print('Percent:', percentage)
            xs.append([Items, cpu, x, y])
            
            # print(xs)
            # if time.time()-start_time > 30:
            #     print('hi count')
            #     del xs[2]
        elif j == 3:
            Items, cpu, x, y = (item,j,count,percentage)
            count+=1
            item+=1
            # print('Percent:', percentage)
            xs.append([Items, cpu, x, y])
            
            # print(xs)
            # if time.time()-start_time > 30:
            #     print('hi count')
            #     del xs[3]
                
        elif j == 4:
            Items, cpu, x, y = (item,j,count,percentage)
            count+=1
            item+=1
            # print('Percent:', percentage)
            xs.append([Items, cpu, x, y])
            
            # print(xs)
            # if time.time()-start_time > 30:
            #     print('hi count')
            #     del xs[4]
        elif j == 5:
            Items, cpu, x, y = (item,j,count,percentage)
            count+=1
            item+=1
            # print('Percent:', percentage)
            xs.append([Items, cpu, x, y])
            
            # print(xs)
            # if time.time()-start_time > 30:
            #     print('hi count')
            #     del xs[5]
        elif j == 6:
            Items, cpu, x, y = (item,j,count,percentage)
            count+=1
            item+=1
            # print('Percent:', percentage)
            xs.append([Items, cpu, x, y])
            
            # print(xs)
            # if time.time()-start_time > 30:
            #     print('hi count')
            #     del xs[6]
        elif j == 7:
            Items, cpu, x, y = (item,j,count,percentage)
            count+=1
            item+=1
            # print('Percent:', percentage)
            xs.append([Items, cpu, x, y])
            xs.append([Items, 8, total, psutil.cpu_percent()])
            total+=1
            
            # print(xs)
            if time.time()-start_time > 30:
                # print('hi count')
                del xs[:9]
            # a = np.array(xs)
            # np.savetxt('C:\\Program Files\\PostgreSQL\\13\\data\\data\\file3.csv', a, delimiter=',')
            # writing to csv file 
        with open('C:\\Program Files\\PostgreSQL\\13\\data\\data\\cpu_live.csv','w', newline='') as f:
            writer = csv.writer(f)
            writer.writerow(fields);
            writer.writerows(xs)
            
                
            #         f.write(str(x) + ',')
            #     f.write('\n')   

        
            