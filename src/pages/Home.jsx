import React,{Component} from 'react';
import {Table,Modal,ModalBody,ModalHeader,ModalFooter} from 'reactstrap'

class Home extends Component {
  state={
    murid:[],
    modalopen:false,
    modaldelete:false,
    deleteselect:-1,
    modaledit:false,
    editselect:0
  }

  componentDidMount(){
    console.log('ini didmount')
    var isidata=[
      {
        nama:'angga',
        umur:24
      },
      {
        nama:'sofia',
        umur:21
      },
      {
        nama:'putri',
        umur:23
      }
    ]
    // console.log(this.state.inputnama.current)
    // this.inputnama.current
    this.setState({murid:isidata})
  }
  componentDidUpdate(){
    console.log('ini did update')
  }
  capitalfirst=(input)=>{
    const upper = input.charAt(0).toUpperCase() + input.substring(1);
    return upper
  }
  
  onAddButtonClick=()=>{
    console.log(this.inputnama.current.value)
    var nama=this.inputnama.current.value//pake createref
    var usia=parseInt(this.state.inputusia)//onchange
    console.log({nama,usia})
    // var muridbaru=this.state.murid
    // muridbaru.push({nama:nama,umur:usia})
    // this.state.inputnama.current.value=''
    // this.state.inputnama.current.focus()
    // this.setState({murid:muridbaru,inputusia:''})
  }


  rendernamamuridtabel=()=>{
    var render= this.state.murid.map((val,index)=>{
      return (
        <tr key={index}>
          <td>{index+1}</td>
          <td>{val.nama}</td>
          <td>{val.umur}</td>
          <td>
            <button className='btn btn-primary mr-2' onClick={()=>this.onBtnEditClick(index)}>Edit</button>
            <button className='btn btn-danger' onClick={()=>this.onBtnDeleteClick(index)}>Delete</button>
          </td>
        </tr>
      )
    })
    return render
  }
  onBtnEditClick=(index)=>{
    this.setState({modaledit:!this.state.modaledit,editselect:index})
  }
  onBtnDeleteClick=(index)=>{
    this.setState({modaldelete:!this.state.modaldelete,deleteselect:index})
  }
  onBtnyesdeleteClick=()=>{
    var datamurid=this.state.murid
    datamurid.splice(this.state.deleteselect,1)
    this.setState({murid:datamurid,modaldelete:false})
  }
  onBtnupdateClick=()=>{
    var editnama=this.refs.editnama.value
    var editumur=this.refs.editumur.value
    var datamurd=this.state.murid
    // cara pertama
    datamurd[this.state.editselect].nama=editnama
    datamurd[this.state.editselect].umur=editumur
    // cara kedua 
    // datamurd[this.state.editselect]={...datamurd[this.state.editselect],nama:editnama,umur:editumur}
    this.setState({murid:datamurd,modaledit:false})
  }
  btntoggle=()=>{
    this.setState({modalopen:!this.state.modalopen})
  }
  btntoggledelete=()=>{
    this.setState({modaldelete:!this.state.modaldelete})
  }
  btntoggleedit=()=>{
    this.setState({modaledit:!this.state.modaledit})
  }

  render() { 
    // console.log(this.state.murid)
    // console.log(this.inputnama.current)
    console.log('renderlagi')
    if(this.state.murid.length===0){
      return (
        <div>
          loading...
        </div>
      )
    }
    return (
      <div className='tengah' style={{height:'99vh'}} >
          <Modal isOpen={this.state.modalopen} toggle={this.btntoggle}>
            <ModalHeader toggle={this.btntoggle}>Add data</ModalHeader>
            <ModalBody>
              dasdadasdasdsad
            </ModalBody>
            <ModalFooter>
              <button>Add data</button>
              <button className='btn btn-danger' onClick={this.btntoggle} >Cancel</button>
            </ModalFooter>
          </Modal>    
          {
            this.state.deleteselect<0?
            null
            :
            <Modal isOpen={this.state.modaldelete} toggle={this.btntoggledelete}>
              <ModalHeader toggle={this.btntoggledelete}>Delete data</ModalHeader>
              <ModalBody>
                yakin menghapus data dengan nama murid <span style={{color:'orange',fontWeight:'bolder'}}>{this.state.murid[this.state.deleteselect].nama}</span>
              </ModalBody>
              <ModalFooter>
                <button className='btn btn-success' onClick={this.onBtnyesdeleteClick}>Yes</button>
                <button className='btn btn-danger' onClick={this.btntoggledelete} >No</button>
              </ModalFooter>
            </Modal>       
            
          }
          <Modal isOpen={this.state.modaledit} toggle={this.btntoggleedit}>
            <ModalHeader toggle={this.btntoggleedit}>edit data {this.state.murid[this.state.editselect].nama}</ModalHeader>
            <ModalBody>
              <input type='text' className='form-control' ref='editnama'  defaultValue={this.state.murid[this.state.editselect].nama}/>
              <input type='number' className='form-control' ref='editumur' defaultValue={this.state.murid[this.state.editselect].umur}/>
            </ModalBody>
            <ModalFooter>
              <button className='btn btn-primary' onClick={this.onBtnupdateClick}>Update data</button>
              <button className='btn btn-danger' onClick={this.btntoggleedit} >Cancel</button>
            </ModalFooter>
          </Modal>  
          <Table striped style={{width:'40%'}}>
            <thead>
              <tr>
                <th>No.</th>
                <th>Nama</th>
                <th>Umur</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                this.rendernamamuridtabel()
              }
            </tbody>
          </Table>
          <button className='btn btn-success' onClick={()=>this.setState({modalopen:!this.state.modalopen})}>Add data</button>
          {/* {
            this.rendernamamurid()
          }
          <input type='text' className='mb-2' placeholder='masukkan nama' ref={this.inputnama} />
          <input 
            type='number' 
            placeholder='masukkan usia' 
            value={this.state.inputusia} 
            onChange={(event)=>this.setState({inputusia:event.target.value})}
          />
          <button onClick={this.onAddButtonClick}  className='btn btn-primary'>
              Add
          </button> */}
      </div>
      );
  }
}
 



export default Home;