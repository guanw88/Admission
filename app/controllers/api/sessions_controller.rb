class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user
      login!(@user)
      render "/api/users/show"
    else
      render json: { errors: ["Invalid credentials"]}, status: 422
    end
  end

  def destroy
    if current_user
      log_out!
      render json: {}
    else
      render json: { errors: ["No user logged in"]}, status: 404
    end
  end


end
