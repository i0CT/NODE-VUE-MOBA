<template>
  <div>
    <h2>{{id ? '编辑' : '新建'}}分类</h2>
    <el-form label-width="80px" @submit.native.prevent="save">
      <el-form-item label="上级分类">
        <el-select v-model="model.parent" placeholder="请选择">
          <el-option v-for="item in parents" :key="item._id" :label="item.name" :value="item._id">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="名称">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item label="操作">
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    id: String
  },
  data () {
    return {
      model: {},
      parents: []
    }
  },
  methods: {
    // 保存数据
    async save () {
      if (this.id) {
        await this.$http.put(`/rest/categories/${this.id}`, this.model)
      } else {
        await this.$http.post('/rest/categories', this.model)
      }
      this.$router.push('/categories/list')
      this.$message.success('保存成功')
    },
    // 获取编辑数据
    async fetch () {
      const res = await this.$http.get(`/rest/categories/${this.id}`)
      this.model = res.data
    },
    // 获取上一级分类数据
    async fetchParents () {
      const res = await this.$http.get(`/rest/categories`)
      this.parents = res.data
    }
  },
  created () {
    this.fetchParents()
    this.id && this.fetch()
  }
}
</script>

<style>
</style>