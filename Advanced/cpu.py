#!/usr/bin/env python
import psutil
import time
# gives a single float value
a=psutil.cpu_percent()
# gives an object with many fields
b=psutil.virtual_memory()
# you can convert that object to a dictionary 
c=dict(psutil.virtual_memory()._asdict())
# you can have the percentage of used RAM
d=psutil.virtual_memory().percent
79.2
# you can calculate percentage of available memory
e=psutil.virtual_memory().available * 100 / psutil.virtual_memory().total
20.

while True:

    print('CPU: ',a,'\n', 'Virtual_Memory: ',b,'\n','Dictonary: ',c,'\n','RAM_Percent: ',d,'\n','AVAILABLE_Mem: ', e)
    time.sleep(1)