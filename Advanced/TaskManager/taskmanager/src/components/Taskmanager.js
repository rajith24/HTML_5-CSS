import React,{Component} from 'react';
import Scatter from './scatter.js'

class TaskManager extends React.Component {
    render() {
        return(
            <div>
                <div class="container mt-3 mb-3">
            <ul class="nav nav-tabs">
                <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#home">Processes</a>
                </li>
                <li class="nav-item">
                <a class="nav-link active" data-toggle="tab" href="#menu1">Performance</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#menu2">App History</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#menu2">Startup</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#menu2">Users</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#menu2">Details</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#menu2">Services</a>
                </li>
            </ul>
            
            {/* <!-- Tab panes --> */}
            <div class="tab-content">
                <div class="tab-pane container fade" id="home" role="tabpanel">...</div>
                <div class="tab-pane container active" id="menu1" role="tabpanel">
                    {/* <!-- performance --> */}
                    <div class="container mt-3 mb-3">
                        <div class="row">
                            <div class="col-4">
                                <div class="list-group list-group-flush" id="list-tab" role="tablist">
                                <a class="list-group-item list-group-item-action active" id="list-home-list" data-bs-toggle="list" href=".list-home" role="tab" aria-controls="home">
                                    <table >
                                        <tr>
                                            <td rowspan="2">
                                            
                                            <div class="smallboxstyle bottom  bdc"><canvas className="total" width="400px" height="400px"></canvas></div>
                                            </td>
                                            <td>
                                            {/* <span style={{float:"right"}}> */}
                                                <tr class="cpupad">
                                                    <td class="cpupad">
                                                        <p class="cpupad">CPU</p>
                                                    </td>
                                                </tr>
                                                <tr class="cpupad">
                                                    <td class="cpupad">
                                                        <small class="cpupad">17%</small>
                                                    </td>
                                                    <td class="cpupad1">
                                                        <small class="cpupad1">2.11 GHz</small>
                                                    </td>
                                                </tr>
                                            {/* </span> */}
                                            </td>
                                        </tr>
                                    </table>
                                    
                                    </a>
                                    <a class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" href=".list-profile" role="tab" aria-controls="profile">Memory</a>
                                    <a class="list-group-item list-group-item-action" id="list-messages-list" data-bs-toggle="list" href=".list-messages" role="tab" aria-controls="messages">Disk 0 (C:)</a>
                                    <a class="list-group-item list-group-item-action" id="list-settings-list" data-bs-toggle="list" href=".list-settings" role="tab" aria-controls="settings">Wi-Fi Direct</a>
                                    <a class="list-group-item list-group-item-action" id="list-settings-list" data-bs-toggle="list" href=".list-settings" role="tab" aria-controls="settings">Wi-Fi</a>
                                    <a class="list-group-item list-group-item-action" id="list-settings-list" data-bs-toggle="list" href=".list-settings" role="tab" aria-controls="settings">Ethernet</a>
                                    <a class="list-group-item list-group-item-action" id="list-settings-list" data-bs-toggle="list" href=".list-settings" role="tab" aria-controls="settings">GPU 0</a>
                                </div>
                            </div>
                            <div class="col-8 mt-1 mb-1">
                                <div class="tab-content" id="nav-tabContent">
                                    <div class="tab-pane fade show active list-home" role="tabpanel" aria-labelledby="list-home-list">
                                        <table class="table table-borderless">
                                            <thead>
                                            <tr>
                                                <td colspan="2">
                                                    <h4>CPU</h4>
                                                    <small class="text-start text-muted">% Utilization over 30 seconds</small>  
                                                </td>
                                                <td colspan="2">
                                                    <p class="text-end">Intel(R) Core(TM) i7-6820HQ CPU @ 2.70GHz</p>
                                                    <small class="text-muted"><p class="text-end">100%</p></small>
                                                </td>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>
                                                    <div class="card boxstyle bdc">
                                                        <div class="card-body boxstyle">
                                                            {/* <Scatter/> */}
                                                            <canvas className="Plot canpad" width="400px" height="400px"></canvas>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="card boxstyle  bdc">
                                                        <div class="card-body boxstyle">
                                                            {/*<Scatter/> */}
                                                            <canvas className="Plot1 canpad" width="400px" height="400px"></canvas>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="card boxstyle  bdc">
                                                        <div class="card-body boxstyle">
                                                        {/* <Scatter/> */}
                                                            <canvas className="Plot2 canpad" width="400px" height="400px"></canvas>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="card boxstyle  bdc">
                                                        <div class="card-body boxstyle">
                                                        {/* <Scatter/> */}
                                                            <canvas className="Plot3 canpad" width="400px" height="400px"></canvas>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div class="card boxstyle  bdc">
                                                        <div class="card-body boxstyle">
                                                        {/* <Scatter/> */}
                                                            <canvas className="Plot4 canpad" width="400px" height="400px"></canvas>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="card boxstyle  bdc">
                                                        <div class="card-body boxstyle">
                                                        {/* <Scatter/> */}
                                                            <canvas className="Plot5 canpad" width="400px" height="400px"></canvas>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="card boxstyle  bdc">
                                                        <div class="card-body boxstyle">
                                                        {/* <Scatter/> */}
                                                            <canvas className="Plot6 canpad" width="400px" height="400px"></canvas>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="card boxstyle  bdc">
                                                        <div class="card-body boxstyle">
                                                        {/* <Scatter/> */}
                                                            <canvas className="Plot7 canpad" width="400px" height="400px"></canvas>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <p class="text-muted text-Start textspace">Utilization</p>
                                                    <p class="text-start textspace"><h4 class="utilization">17%</h4></p>
                                                    <p class="text-muted text-Start textspace">Processes</p>
                                                    <p class="text-start textspace"><h4>247</h4></p>
                                                    <p class="text-muted text-Start textspace">Up time</p>
                                                    <p class="text-start textspace"><h4>0:06:41:11</h4></p>
                                                </td>
                                                <td class="textspace table-editable">
                                                    <p class="text-muted text-Start textspace">Speed</p>
                                                    <p class="text-start textspace"><h4>2.11 GHz</h4></p>
                                                    <table class="table table-borderless">
                                                        <tbody class="textspace">
                                                          <tr class="textspace">
                                                            <td class="textspace">
                                                                <p class="text-muted text-Start textspace">Threads</p> 
                                                                <p class="text-start textspace"><h4>2761</h4></p>
                                                            </td>
                                                            <td class="textspace">
                                                                <p class="text-muted text-start textspace" >Handles</p>
                                                                <span class="text-start textspace"><h4>92467</h4></span>
                                                            </td>
                                                          </tr>
                                                        </tbody>
                                                      </table>
                                                </td>
                                                <td>
                                                    <p class="text-muted text-start textspace">Base speed:</p>
                                                    <p class="text-muted text-start textspace">Sockets:</p>
                                                    <p class="text-muted text-start textspace">Cores:</p>
                                                    <p class="text-muted text-start textspace">Logical Processors:</p>
                                                    <p class="text-muted text-start textspace">Virtualization:</p>
                                                    <p class="text-muted text-start textspace">L1 cache:</p>
                                                    <p class="text-muted text-start textspace">L2 cache:</p>
                                                    <p class="text-muted text-start textspace">L3 cache:</p>
                                                </td>
                                                <td>
                                                    <p class="text-start textspace">2.71 GHz</p>
                                                    <p class="text-start textspace">1</p>
                                                    <p class="text-start textspace">4</p>
                                                    <p class="text-start textspace">8</p>
                                                    <p class="text-start textspace">Enabled</p>
                                                    <p class="text-start textspace">256 KB</p>
                                                    <p class="text-start textspace">1.0 MB</p>
                                                    <p class="text-start textspace">8.0 MB</p>
            
                                                    
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="tab-pane fade list-profile" role="tabpanel" aria-labelledby="list-profile-list">...</div>
                                    <div class="tab-pane fade list-messages" role="tabpanel" aria-labelledby="list-messages-list">...</div>
                                    <div class="tab-pane fade list-settings" role="tabpanel" aria-labelledby="list-settings-list">...</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane container fade" id="menu2" role="tabpanel">...</div>
            </div>
        </div>  
            </div>
            )
    }

}

export default TaskManager