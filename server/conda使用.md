# conda 的常用命令

```python
# 查看当前环境列表
conda env list

# 更新 conda
conda update conda

# 创建虚拟环境 
conda create -n env_name python=x.x

# Windows 激活虚拟环境
conda activate env_name

# Windows 退出虚拟环境
deactivate env_name

# MacOS 激活虚拟环境
source active env_name

# MacOS 退出虚拟环境
conda deactivate

# 永久退出基础环境提示符，命令行前边的 [base]
conda config --set auto_activate_base false

# 在虚拟环境中安装额外的包
conda install -n env_name package_name

# 生成依赖文件
conda env export > environment.yaml

# 生成依赖文件，忽略最后一行自动生成的本机的项目目录
conda env export | grep -v "^prefix:" > environment.yaml

# 依据这个环境文件，创建一个一模一样的环境
conda env create -f environment.yaml

# 删除虚拟环境
conda remove -n env_name --all

# 删除虚拟环境中的某个包
conda remove -n env_name package_name

# 查看现在有的镜像
conda config --show channels

# 添加清华大学镜像
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free/

# 删除清华大学镜像
conda config --remove https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free/
```
