<template>
    <div>
        
      <!-- <input type="file" @change="handleFileChange" accept=".csv" /> -->
      <pre>{{ jsonData }}</pre>
      <div>
        <v-btn @click="handleFileChange" >transformar</v-btn>
    <input type="file" @change="handleFileChange" accept=".csv" />
    <table v-if="parsedData.length > 0">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Valor de Venda</th>
          <th>Valor de Compra</th>
          <th>Empresa ID</th>
          <th>Tipo de Unidade de Medida ID</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(produto, index) in parsedData" :key="index">
          <td>{{ produto.id }}</td>
          <td>{{ produto.nome }}</td>
          <td>{{ produto.valorVenda }}</td>
          <td>{{ produto.valorCompra }}</td>
          <td>{{ produto.empresaId }}</td>
          <td>{{ produto.tipoUnidadeMedidaId }}</td>
        </tr>
      </tbody>
    </table>
  </div>
    </div>
  </template>
  
  <script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import csvToJson from 'csvtojson';
  import ItemDto from '@/Model/Itens/ItemDto';
  import csvParser from 'csv-parser';
  import fs from 'fs';
  @Component({
    components: {

    }
  })
  export default class ConversorCsvParaJson extends Vue {


     public parsedData: ItemDto[] = [];

jsonData: string = '';


  async handleFileChange(event: Event): Promise<void> {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      const file = inputElement.files[0];
      if (file) {
        debugger
        const fileContent = await this.readFileContent(file);
        //const jsonArray = await csvToJson().fromString(fileContent);
        //this.jsonData = JSON.stringify(jsonArray, null, 2);
        this.parsedData =  await csvToJson().fromString(fileContent);
      }
    }
  }

  async readFileContent(file: File): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event: any) => {
        resolve(event.target.result);
      };
      reader.onerror = (error) => {
        reject(error);
      };
      reader.readAsText(file);
    })
}



    
  }
  </script>
  <style scoped>
  .product-table {
    width: 100%;
    border-collapse: collapse;
    border: 1px solid #ccc;
  }
  
  .product-table th, .product-table td {
    padding: 8px;
    border: 1px solid #ccc;
  }
  